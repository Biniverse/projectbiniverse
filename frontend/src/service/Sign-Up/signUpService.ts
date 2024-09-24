import { IUser } from "../../shared/interface";
import http from "../httpService";

export const getAllUsers = async (): Promise<IUser[]> => {
  let data: IUser[] = [];
  try {
    const { data } = await http.get("users-list");
    return data;
  } catch (error) {
    throw error;
  }
};
