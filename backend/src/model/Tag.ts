import mongoose from "mongoose";

const TagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: true },
);

export const TagModel = mongoose.model("Tag", TagSchema);
