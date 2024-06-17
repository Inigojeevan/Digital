import express from "express";
import AttendanceModel from "../schema/attendanceModel";

const router = express.Router();

router.post("/clockIn/:employeeID", async (req, res) => {
  const { employeeID } = req.params;
  const clockInTime = new Date();
  try {
    const attendanceRecord = new AttendanceModel({
      employeeID,
      date: clockInTime,
      clockIn: clockInTime,
      clockOut: null,
      hoursWorked: 0,
    });
    await attendanceRecord.save();
    res.status(200).json({ message: "Clocked in successfully", clockInTime });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: (error as Error).message });
  }
});

router.post("/clockOut/:employeeID", async (req, res) => {
  const { employeeID } = req.params;
  const clockOutTime = new Date();
  try {
    const attendanceRecord = await AttendanceModel.findOne({
      employeeID,
      clockOut: null,
    });
    if (!attendanceRecord) {
      res.status(400).json({ message: "No clock in record found" });
    } else {
      attendanceRecord.clockOut = clockOutTime;
      attendanceRecord.hoursWorked =
        (attendanceRecord.clockOut.getTime() -
          attendanceRecord.clockIn.getTime()) /
        3600000;
      await attendanceRecord.save();
      res
        .status(200)
        .json({ message: "Clocked out successfully", clockOutTime });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

export default router;