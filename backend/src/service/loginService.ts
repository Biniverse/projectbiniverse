import argon2 from "argon2";
import { IUser } from "../shared/interface";
import { getUserByEmail } from "./userService";

export async function VerifyCredentials(
  email: string,
  password: string
): Promise<IUser | null> {
  try {
    let user: IUser = await getUserByEmail(email);

    if (!user) {
      return null;
    }

    if (user) {
      console.log(user);
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error verifying credentials: ${error.message}`);
    return null;
  }
}
