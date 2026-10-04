import { Router } from "express";
import { createShareableLink, getShareableLink } from "../controller/brain.js";

export const brainRouter = Router();

brainRouter.post("/share/:id", createShareableLink);

brainRouter.get("/:shareLink", getShareableLink);
