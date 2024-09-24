// src/routes/helloRoute.ts
import { Router } from "express";
import { getHelloWorld, registerUser } from "../controller/userController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/register", registerUser);

export default userRouter;
