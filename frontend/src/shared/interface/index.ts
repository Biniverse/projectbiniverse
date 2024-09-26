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

export interface ISignUp {
  firstName: string;
  lastName: string;
  contact: number;
  email: string;
}

export interface ISignUpResponse {
  success: string; // Optional because it may not always be present
  error?: string; // Optional to handle error cases
}
