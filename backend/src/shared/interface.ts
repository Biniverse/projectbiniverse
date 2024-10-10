import { ROLES } from "./enums";

export interface IUser {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  role: ROLES;
}

export interface UserSession {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  role: ROLES;
}
