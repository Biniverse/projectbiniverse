import { Request, Response } from "express";

const APP_KEY = "A1b@2C#d4E$5f^6G*7h!8J9k(L)m0Nq";
const USER_NAME = "user";
const EMAIL = "user@user.com";
const PASSWORD = "testpassword";

export const loginUser = async (req: Request, res: Response) => {
  const message: string = "Login Success";
  const unauthorized: string = "Invalid Credentials. Try again";
  const app_key = req.header("app-key");

  const { username, email, password } = req.body;

  try {
    // Validate app key first
    if (app_key !== APP_KEY) {
      return res.status(401).json({ status: 401, message: unauthorized });
    }

    // Validate password
    if (password !== PASSWORD) {
      return res.status(401).json({ status: 401, message: unauthorized });
    }

    // Check if either email or username is present and valid
    const isUsernameValid = username === USER_NAME;
    const isEmailValid = email === EMAIL;

    if (isUsernameValid || isEmailValid) {
      return res.status(200).json({ status: 200, message: message });
    } else {
      return res
        .status(401)
        .json({ status: 401, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal server error" });
  }
};
