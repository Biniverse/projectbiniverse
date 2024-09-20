import { Request, Response } from "express";

const APP_KEY = "A1b@2C#d4E$5f^6G*7h!8J9k(L)m0Nq";
const USER_NAME = "user";
const EMAIL = "user@user.com";
const PASSWORD = "testpassword";

/**
 * The `loginUser` function handles a login request and sends a success message in the response.
 * @param {Request} req - Request object containing information about the HTTP request.
 * @param {Response} res - Response object for sending data back to the client.
 */
export const loginUser = async (req: Request, res: Response) => {
  const message: string = "Login Success";
  const app_key = req.header("app-key");

  const { username, email, password } = req.body;

  try {
    // Check if either email or username is present and validate the password
    const isUsernameValid =
      username === USER_NAME && password === PASSWORD && app_key === APP_KEY;
    const isEmailValid =
      email === EMAIL && password === PASSWORD && app_key === APP_KEY;

    if (isUsernameValid || isEmailValid) {
      res.status(200).json({ status: 200, message: message });
    } else {
      res.status(401).json({ status: 401, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};
