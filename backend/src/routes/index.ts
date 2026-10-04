import { Router } from "express";
import { authRouter } from "./auth.js";
import { contentRouter } from "./content.js";
import { brainRouter } from "./brain.js";
import userMiddleware from "../middleware/user.js";

export const v1Router = Router();

v1Router.use("/auth", authRouter);
v1Router.use("/content", userMiddleware, contentRouter);
v1Router.use("/brain", brainRouter);
