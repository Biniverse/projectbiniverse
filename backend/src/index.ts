import express, { Request, Response } from "express";
import userRouter from "./routes/userRoutes";
const app = express();
const port = process.env.PORT || 8080;

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
