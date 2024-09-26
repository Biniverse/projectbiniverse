import cors from "cors";
import express from "express";
import helmet from "helmet";
import userRouter from "./routes/userRoutes";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import { generalLimiter } from "./middleware/limiter";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Middleware
// app.use(helmet());
app.use(cors());
// app.use(generalLimiter);
app.use(express.json());

// Routes
app.use("/", userRouter);

// Start server
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
});
