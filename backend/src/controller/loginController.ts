import { Request, Response } from "express";
import { VerifyCredentials } from "../service/loginService";
import { IUser, UserSession } from "../shared/interface";
import { generateToken } from "../shared/generateToken";
import ErrorModule from "../shared/errors";

/**
 * The function `LoginUser` handles user login authentication and returns a token and user information
 * upon successful authentication or appropriate error messages.
 * @param {Request} req - The `req` parameter in the `LoginUser` function stands for the request
 * object, which contains information about the HTTP request that is being made. This object typically
 * includes details such as the request headers, body, parameters, and other relevant data sent by the
 * client to the server. In this case
 * @param {Response} res - The `res` parameter in the `LoginUser` function stands for the response
 * object. It is used to send a response back to the client who made the request. In this function, the
 * response object is used to send JSON responses with status codes and messages based on the outcome
 * of the login process
 * @returns The LoginUser function returns a response with status code and JSON data. If the login is
 * successful, it returns a success message along with a token and user information. If there is an
 * error during login, it returns a failure message with the appropriate error message based on the
 * type of error encountered.
 */
export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || !email.trim() || !password.trim()) {
      throw new ErrorModule.ArgumentNullException(
        `Fields are required and cannot be empty or contains only spaces `
      );
    }

    const authenticated: UserSession = await VerifyCredentials(email, password);

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
        user: user,
      });
    }
  } catch (loginError) {
    if (loginError instanceof ErrorModule.NotFound) {
      return res
        .status(loginError.statusCode)
        .json({ success: false, message: `${loginError.message}` });
    }

    if (loginError instanceof ErrorModule.Unauthorized) {
      return res
        .status(loginError.statusCode)
        .json({ success: false, message: `${loginError.message}` });
    }

    if (loginError instanceof ErrorModule.ArgumentNullException) {
      return res
        .status(loginError.statusCode)
        .json({ success: false, message: loginError.message });
    }

    if (loginError instanceof ErrorModule.NotFound) {
      return res
        .status(loginError.statusCode)
        .json({ success: false, message: `${loginError.message}` });
    }

    return res
      .status(loginError.statusCode)
      .json({ success: false, message: `${loginError.message}` });
  }
};
