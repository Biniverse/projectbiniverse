import { Request, Response } from "express";
import { VerifyCredentials } from "../service/loginService";
import { IUser } from "../shared/interface";
import { generateToken } from "../shared/generateToken";

/**
 * The function `LoginUser` handles user login authentication and generates a token upon successful
 * authentication.
 * @param {Request} req - The `req` parameter in the `LoginUser` function stands for the request
 * object, which contains information about the HTTP request made to the server. It includes details
 * such as the request headers, body, parameters, and more. In this case, the `req` parameter is of
 * type `Request
 * @param {Response} res - The `res` parameter in the `LoginUser` function is an object representing
 * the HTTP response that the server sends back to the client. It allows you to send data back to the
 * client, such as status codes, headers, and response body. In the provided code snippet, `res` is
 * @returns The LoginUser function returns a response based on the authentication process. If the email
 * or password fields are missing, it returns a 417 status with a message indicating that fields cannot
 * be null. If the credentials are verified successfully, it generates a token for the user and returns
 * a 200 status with the token. If the credentials are invalid, it returns a 401 status with a message
 * stating the invalid
 */
export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(417).json({ message: "Fields cannot be null." });
    }

    const authenticated: IUser | null = await VerifyCredentials(
      email,
      password
    );

    if (authenticated) {
      const user = {
        employeeId: authenticated.employeeId,
        firstName: authenticated.firstName,
        lastName: authenticated.lastName,
        email: authenticated.email,
        contact: authenticated.contact,
        role: authenticated.role,
      };
      const token = generateToken(user);
      return res.status(200).json({
        success: true,
        token: token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Invalid credentials for user with email ${email}`,
      });
    }
  } catch (loginError) {
    console.error(`An error occurred during login: ${loginError.message}`);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
