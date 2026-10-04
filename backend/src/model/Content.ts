import mongoose, { Types } from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["image", "video", "article", "audio"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [Types.ObjectId],
      ref: "Tag",
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    share: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const ContentModel = mongoose.model("Content", ContentSchema);
