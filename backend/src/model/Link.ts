import mongoose, { Types } from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    hash: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

export const LinkModel = mongoose.model("Link", LinkSchema);
