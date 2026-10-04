import express from "express";
import dotenv from "dotenv";
import { v1Router } from "./routes/index.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());
dotenv.config();

connectDB();

app.use("/api/v1", v1Router);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(8080, () => console.log("App listening on PORT 8080"));
