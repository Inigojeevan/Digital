import mongoose from "mongoose";

interface Taskboard {
  taskID: string;
  title: string;
  projectName: string;
  priority: "low" | "medium" | "high";
  date: Date;
  employeeID: string;
}

const taskBoardSchema = new mongoose.Schema<Taskboard>({
  taskID: { type: String, required: true },
  title: { type: String, required: true },
  projectName: { type: String, required: true },
  priority: { type: String, required: true, enum: ["low", "medium", "high"] },
  date: { type: Date, required: true },
  employeeID: { type: String, required: true },
});

const TaskBoardModel = mongoose.model<Taskboard>("Taskboard", taskBoardSchema);

export default TaskBoardModel;
