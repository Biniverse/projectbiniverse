// src/services/helloService.ts
import { Request, Response } from "express";
import { getApiGreetings } from "../service/userService";
export const getHelloWorld = (req: Request, res: Response): void => {
  const message: string = getApiGreetings();
  res.status(200).json({
    message: message,
    status: 200,
  });
};
