import { Request, Response } from "express";
import { VerifyCredentials } from "../service/loginService";
import { IUser } from "../shared/interface";

// Controller function to handle user login
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

      // TODO: Add encryption to encrypt user data for session storage

      return res.status(200).json({
        success: true,
        user: user,
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
