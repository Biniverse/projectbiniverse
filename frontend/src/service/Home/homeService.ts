import { IData } from "../../shared/interface";
import http from "../httpService";

export const homeService = async (): Promise<IData> => {
  try {
    const data: IData = await http.get("test");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
