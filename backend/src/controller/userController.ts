// src/services/helloService.ts
import { Request, Response } from "express";
import { getApiGreetings } from "../service/userService";
import User from "../model/userModel";

export const getHelloWorld = (req: Request, res: Response): void => {
  const message: string = getApiGreetings();
  res.status(200).json({
    message: message,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const user = req.body;

  const newUser = new User(user);

  try{
    await newUser.save();
    res.status(201).json({
      status: 201,
      data: newUser
    })
  }catch(error){
		res.status(500).json({
      success: false, 
      message: "Server Error" 
    });
  }
}