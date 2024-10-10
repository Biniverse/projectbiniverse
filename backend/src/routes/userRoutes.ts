// src/routes/helloRoute.ts
import { Router } from "express";
import {
  getHelloWorld,
  registerUser,
  getUsers,
  getUser,
} from "../controller/userController";
import { LoginUser } from "../controller/loginController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/register", registerUser);
userRouter.get("/users-list", getUsers);
userRouter.post("/login", LoginUser);
userRouter.post("/getuser", getUser);


export default userRouter;
