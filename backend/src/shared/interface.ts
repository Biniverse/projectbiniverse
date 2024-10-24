import { ROLES } from "./enums";

export interface IUser {
  _id: string;
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  role: ROLES;
}

export interface UserSession {
  _id: string;
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  role: ROLES;
}
