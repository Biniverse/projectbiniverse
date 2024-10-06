// src/routes/helloRoute.ts
import { Router } from "express";
import {
  getHelloWorld,
  registerUser,
  getUsers,
} from "../controller/userController";
import { LoginUser } from "../controller/loginController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/register", registerUser);
userRouter.get("/users-list", getUsers);
userRouter.post("/login", LoginUser);

export default userRouter;
