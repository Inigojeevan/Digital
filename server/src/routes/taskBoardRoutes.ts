import express from "express";
import TaskBoardModel from "../schema/taskboardSchema";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { taskID, title, projectName, priority, date, employeeID } = req.body;
  try {
    const newTask = new TaskBoardModel({
      taskID,
      title,
      projectName,
      priority,
      date,
      employeeID,
    });
    await newTask.save();
    res.status(200).json({ message: "Task added successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/:employeeID", async (req, res) => {
  const { employeeID } = req.params;
  try {
    const tasks = await TaskBoardModel.find({ employeeID });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.put("/update/:employeeID/:taskID", async (req, res) => {
  const { employeeID, taskID } = req.params;
  const { title, projectName, priority, date } = req.body;
  try {
    const task = await TaskBoardModel.findOneAndUpdate(
      { employeeID, taskID },
      { title, projectName, priority, date },
      { new: true }
    );
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.delete("/delete/:employeeID/:taskID", async (req, res) => {
  const { employeeID, taskID } = req.params;
  try {
    const task = await TaskBoardModel.findOneAndDelete({ employeeID, taskID });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;