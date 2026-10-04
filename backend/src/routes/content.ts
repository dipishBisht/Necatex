import { Router } from "express";
import { ContentModel } from "../model/Content.js";

export const contentRouter = Router();

contentRouter.post("/", async (req, res) => {
  const { link, type, title, tags } = req.body;
  const { userId } = req;

  try {
    const content = await ContentModel.create({
      link,
      type,
      title,
      tags,
      userId: userId!,
    });
    res.json({ success: true, message: "Content added successfully", content });
  } catch (error) {
    console.log("POST CONTENT:",error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

contentRouter.get("/", async (req, res) => {
  const { userId } = req;

  try {
    const contents = await ContentModel.find({ userId: userId! }).populate(
      "userId",
      "username",
    );
    res.json({ success: true, contents });
  } catch (error) {
    console.log("GET CONTENT: ",error)
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

contentRouter.delete("/", (req, res) => {});
