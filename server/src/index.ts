import mongoose from "mongoose";
import express, { Express, NextFunction, Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv";
import attendanceRouter from "./routes/attendanceRouter";
import leaveRouter from "./routes/leaveRouter";
import clockRoutes from "./routes/clockRoutes";
import meetingRoutes from "./routes/meetingRoutes";
import taskBoardRoutes from "./routes/taskBoardRoutes";

dotenv.config();
const app: Express = express();
const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

//mongoDB
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MongoURI is missing");
}
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err, "Error connecting to MongoDB"));

app.use("/attendance", attendanceRouter);
app.use("/leave", leaveRouter);
app.use("/clock", clockRoutes);
app.use("/meetings", meetingRoutes);
app.use("/taskboard", taskBoardRoutes);

app.use((err :any, req :Request, res :Response, next :NextFunction)  => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
