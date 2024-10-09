import argon2 from "argon2";
import { IUser } from "../shared/interface";
import { User } from "../model/userModel";

/**
 * The function `VerifyCredentials` verifies a user's credentials by checking if the email exists, then
 * verifying the password using argon2, and returns the user if credentials are valid.
 * @param {string} email - The `email` parameter is a string that represents the email address of the
 * user whose credentials are being verified.
 * @param {string} password - The `VerifyCredentials` function takes an email and a password as
 * parameters. The password parameter is a string that represents the user's password that they are
 * trying to verify during the authentication process.
 * @returns The VerifyCredentials function returns a Promise that resolves to either an IUser object if
 * the credentials are valid, or null if the credentials are invalid or an error occurs during the
 * verification process.
 */
export async function VerifyCredentials(
  email: string,
  password: string
): Promise<IUser | null> {
  try {
    const user: IUser | null = await User.findOne({ email }).select(
      "+password"
    );

    if (!user) {
      return null;
    }

    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(`Error verifying credentials: ${error.message}`);
    return null;
  }
}
