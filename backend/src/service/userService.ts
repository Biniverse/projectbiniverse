import { RegisterForm } from "../shared/types";
import User from "../model/userModel";

export const getApiGreetings = () => {
  let message: string = "Greetings from Biniverse API v1.0.0";
  return message;
};

export const getUserByEmail = (email: string) => User.findOne({ email });

export const createUser = (values: Record<RegisterForm, string>) =>
  new User(values).save().then((user) => user.toObject());
