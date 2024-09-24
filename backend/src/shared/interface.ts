import { ROLES } from "./enums";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
  role: ROLES;
}
