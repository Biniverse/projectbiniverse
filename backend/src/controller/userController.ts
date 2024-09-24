// src/services/helloService.ts
import argon2 from "argon2";
import { Request, Response } from "express";
import {
  createUser,
  getApiGreetings,
  getUserByEmail,
  getAllUsers,
} from "../service/userService";
import { USERMESSAGE } from "../shared/constants";
import { IUser } from "../shared/interface";
import { CreateUserSchema } from "../shared/validationSchemas";
import { ROLES } from "../shared/enums";

export const getHelloWorld = (req: Request, res: Response): void => {
  const message: string = getApiGreetings();
  res.status(200).json({
    message: message,
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;

  try {
    const validatedData = CreateUserSchema.safeParse(user);
    if (!validatedData.success) {
      return res.status(400).json(validatedData.error.issues);
    }
    const { firstName, lastName, contact, role } = user;
    let email = user.email.toLowerCase();
    const userExist = await getUserByEmail(email);
    if (userExist)
      return res.status(400).json({ error: USERMESSAGE.EXIST.EMAIL });

    const hashedPassword = await argon2.hash(email); //EMAIL IS THE DEFAULT PASSWORD
    await createUser({
      firstName,
      lastName,
      email,
      contact,
      role: ROLES.EMPLOYEE,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: USERMESSAGE.SUCCESS.CREATED,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getAllUsers();
    if (users) {
      res.status(200).json({
        data: users,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
