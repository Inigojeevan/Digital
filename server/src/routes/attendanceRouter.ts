import express from "express";
import AttendanceModel from "../schema/attendanceModel";

const router = express.Router();

router.get("/:employeeID", async (req, res) => {
  const { employeeID } = req.params;
  try {
    const attendanceRecords = await AttendanceModel.find({ employeeID });
    res.status(200).json({ employeeID, attendance: attendanceRecords });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;