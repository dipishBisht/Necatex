import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/necatex",);
    console.log("MONGODB conencted successfully");
  } catch (error) {
    console.error("Error connecting DB", error);
  }
}
