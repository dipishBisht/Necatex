import { Router } from "express";
import { signin, signup } from "../controller/auth.js";

export const authRouter = Router();

authRouter.post("/signup", signup);

authRouter.post("/signin", signin);
