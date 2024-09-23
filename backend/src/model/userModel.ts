import mongoose from "mongoose";
import { ROLES } from "../shared/enums";
import { IUser } from "../shared/interface";

const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
