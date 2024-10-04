import { ISignIn, ISignInResponse } from "../../shared/interface";
import http from "../httpService";

export const signInService = async (
  user: ISignIn
): Promise<ISignInResponse> => {
  console.log(user);
  try {
    const response = await http.post("/login", user);
    return response?.data || response;
  } catch (error) {
    throw error;
  }
};
