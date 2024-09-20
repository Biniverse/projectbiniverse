// src/routes/helloRoute.ts
import { Router } from "express";
import { getHelloWorld, createUser } from "../controller/userController";
import { loginUser } from "../controller/loginController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/users", createUser);

userRouter.post("/login", loginUser);

export default userRouter;
