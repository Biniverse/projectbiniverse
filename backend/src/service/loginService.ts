import argon2 from "argon2";
import { IUser } from "../shared/interface";
import { User } from "../model/userModel";

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
