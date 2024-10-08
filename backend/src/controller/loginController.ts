import { Request, Response } from "express";
import { VerifyCredentials } from "../service/loginService";
import { IUser } from "../shared/interface";

/**
 * The function `LoginUser` handles user authentication by verifying credentials and returning
 * appropriate responses.
 * @param {Request} req - The `req` parameter in the `LoginUser` function stands for the request
 * object, which contains information about the HTTP request made to the server. This object typically
 * includes details such as the request headers, body, parameters, and other relevant data sent by the
 * client to the server. In this case
 * @param {Response} res - The `res` parameter in the `LoginUser` function is the response object that
 * will be used to send the response back to the client making the request. It is an instance of the
 * Express Response object, which provides methods for sending responses like `res.status()`,
 * `res.json()`, etc
 * @returns The `LoginUser` function returns a JSON response based on the authentication result. If the
 * user is successfully authenticated, it returns a success message with the user's information and a
 * status code of 200. If the authentication fails, it returns an error message with the status code
 * 401. If an error occurs during the login process, it returns an internal server error message with
 * the status code 500
 */
export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
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

      // TODO: Add encryption to encrypt user data that will be used for sessionVerification

      return res.status(200).json({
        success: true,
        message: `Login successful ${authenticated.firstName} ${authenticated.lastName}`,
        user: user,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Invalid credentials ${authenticated.email} ${authenticated.password}`,
      });
    }
  } catch (loginError) {
    console.error(
      `An error occurred during login: ${loginError.message} ${email}`
    );
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
