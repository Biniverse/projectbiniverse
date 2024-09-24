// src/routes/helloRoute.ts
import { Router } from "express";
import {
  getHelloWorld,
  registerUser,
  getUsers,
} from "../controller/userController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/register", registerUser);
userRouter.get("/users-list", getUsers);

export default userRouter;
