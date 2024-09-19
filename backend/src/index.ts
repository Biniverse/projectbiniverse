import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./routes/userRoutes";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/", userRouter);

console.log(process.env.MONGO_URI);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
