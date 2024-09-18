// src/routes/helloRoute.ts
import { Router } from "express";
import { getHelloWorld } from "../controller/userController";

const userRouter = Router();

userRouter.get("/", getHelloWorld);

export default userRouter;
