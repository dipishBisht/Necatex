import type { Request, Response } from "express";
import { ContentModel } from "../model/Content.js";

export async function createContent(req: Request, res: Response) {
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
    console.log("POST CONTENT:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

export async function getAllContent(req: Request, res: Response) {
  const { userId } = req;

  try {
    const contents = await ContentModel.find({ userId: userId! }).populate(
      "userId",
      "username",
    );
    res.json({ success: true, contents });
  } catch (error) {
    console.log("GET CONTENT: ", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}

export async function deleteContent(req: Request, res: Response) {
  const { userId } = req;

  try {
    await ContentModel.deleteMany({ userId: userId! });
    return res
      .status(200)
      .json({ success: true, message: "Content deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}
