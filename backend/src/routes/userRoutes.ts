// src/routes/helloRoute.ts
import { Router } from "express";
import { getHelloWorld, createUser } from "../controller/userController";

const userRouter = Router();

userRouter.get("/test", getHelloWorld);

userRouter.post("/users", createUser);

export default userRouter;
