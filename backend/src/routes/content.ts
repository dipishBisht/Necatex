import { Router } from "express";
import { createContent, deleteContent, getAllContent } from "../controller/content.js";

export const contentRouter = Router();

contentRouter.post("/", createContent);

contentRouter.get("/", getAllContent);

contentRouter.delete("/", deleteContent);
