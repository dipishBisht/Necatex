import type { Request, Response } from "express";
import { ContentModel } from "../model/Content.js";

export async function createShareableLink(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = req;
  try {
    let content = await ContentModel.findOne({ userId: userId!, _id: id });

    if (!content)
      return res
        .status(400)
        .json({ success: false, message: "No content found" });

    const link = Math.random().toString(36).substring(2, 11);

    content.updateOne({ share: true, link });
    await content.save();
    return res.status(200).json({
      success: true,
      message: "You can share the content with anyone",
      link,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}

export async function getShareableLink(req: Request, res: Response) {
  const { shareLink } = req.params;

  try {
    const content = await ContentModel.findOne({ link: shareLink! });

    if (!content)
      return res
        .status(400)
        .json({ success: false, message: "No content found" });

    return res
      .status(200)
      .json({ success: true, message: "Content found successfully", content });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
}
