import { Request, Response } from "express";
import { VerifyCredentials } from "../service/loginService";
import { IUser } from "../shared/interface";
import { emit } from "process";

export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Authenticate the user using the cleaned-up verifyCredentials function
    const authenticated: IUser | null = await VerifyCredentials(
      email,
      password
    );

    if (authenticated) {
      // If authentication succeeds, set session data
      req.session.user = {
        employeeId: authenticated.employeeId,
        firstName: authenticated.firstName,
        lastName: authenticated.lastName,
        email: authenticated.email,
        contact: authenticated.contact,
        role: authenticated.role,
      };

      return res.status(200).json({
        success: true,
        message: `Login successful ${authenticated.firstName} ${authenticated.lastName}`,
      });
    } else {
      // If authentication fails, return an error response
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
