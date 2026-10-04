import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JWTPayload } from "../types/jwt-payload.js";

export default function userMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const header = req.headers["authorization"];
  const token = header?.split(" ")[1];
  const JWT_PASSWORD = process.env.JWT_PASSWORD;

  if(!token)
  return res.status(403).json({success:false, meesage: "User not logged in"})

  const decoded = jwt.verify(
    token as string,
    JWT_PASSWORD as string,
  ) as JWTPayload;

  if (decoded) {
    req.userId = decoded.id;
    next();
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
}
