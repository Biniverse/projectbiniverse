import argon2 from "argon2";
import ErrorModule from "../shared/errors";
import { IUser, UserSession } from "../shared/interface";
import { User } from "../model/userModel";

/**
 * The function VerifyCredentials verifies user credentials by checking the email and password
 * provided.
 * @param {string} email - The `email` parameter is a string that represents the email address of the
 * user whose credentials are being verified.
 * @param {string} password - The `password` parameter in the `VerifyCredentials` function is a string
 * that represents the password input provided by a user during the authentication process. This
 * password will be compared with the hashed password stored in the database for the user with the
 * corresponding email address to verify the user's credentials.
 * @returns The function `VerifyCredentials` is returning a `Promise` that resolves to a `UserSession`
 * object.
 */
export async function VerifyCredentials(
  email: string,
  password: string
): Promise<UserSession> {
  try {
    const user: IUser = await User.findOne({
      email: { $eq: email },
    }).select("+password");

    if (!user) {
      throw new ErrorModule.NotFound(`User with email ${email} not found`);
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      throw new ErrorModule.Unauthorized(
        `Invalid credentials for ${user.email}`
      );
    }

    return user;
  } catch (error) {
    if (
      error instanceof ErrorModule.NotFound ||
      error instanceof ErrorModule.Unauthorized
    ) {
      throw error;
    }
    throw new ErrorModule.InternalServerError();
  }
}
