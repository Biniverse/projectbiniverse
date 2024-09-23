import { RegisterForm } from "../shared/types";
import User from "../model/userModel";

export const getApiGreetings = () => {
  let message: string = "Greetings from Biniverse API v1.0.0";
  return message;
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    return null;
  }
};

export const createUser = async (values: Record<RegisterForm, string>) => {
  try {
    const user = await new User(values).save();
    return user.toObject();
  } catch (error) {
    return null;
  }
};
