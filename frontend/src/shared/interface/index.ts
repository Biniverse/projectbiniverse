import { ROLES } from "../enum";

export interface IData {
  message: string;
}
export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  role: ROLES;
  employeeId: number;
}
