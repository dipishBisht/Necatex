import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../model/User.js";

export async function signup(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Invalid Input" });
  }

  try {
    const existingUser = await UserModel.findOne({ username });

    if (existingUser)
      res.status(400).json({
        sucess: false,
        message: "User with this username already exist.",
      });
    await UserModel.create({ username, password });
    res.json({
      success: true,
      message: "User created successfully",
      user: { username },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
      user: { username },
    });
  }
}

export async function signin(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ succcess: false, meesage: "Invalid Input" });
  }
  try {
    const user = await UserModel.findOne({ username, password });
    const JWT_PASSWORD = process.env.JWT_PASSWORD;
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        JWT_PASSWORD as string,
      );

      res.json({
        success: true,
        message: "User signed in successfully",
        token,
      });
    } else {
      res.status(400).json({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
