import { ISignUp, ISignUpResponse, IUser } from "../../shared/interface";
import http from "../httpService";

export const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const { data } = await http.get("users-list");
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (user: ISignUp): Promise<ISignUpResponse> => {
  try {
    const response = await http.post("register", user);
    return response?.data || response;
  } catch (error) {
    throw error;
  }
};
