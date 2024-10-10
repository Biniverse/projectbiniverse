import mongoose from "mongoose";
import { ROLES } from "../shared/enums";
import { IUser } from "../shared/interface";
import Counter from "./idCounterSchema";

// Shared user fields
const sharedUserSchemaFields = {
  employeeId: {
    type: Number,
    unique: true,
  },
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
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true,
  },
};

const userSchema = new mongoose.Schema<IUser>({
  ...sharedUserSchemaFields,
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { _id: "employeeId" },
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );

    this.employeeId = counter.sequenceValue;
  }

  next();
});

const User = mongoose.model<IUser>("User", userSchema);

export { User };
