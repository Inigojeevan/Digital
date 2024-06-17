import express from "express";
import AttendanceModel from "../schema/attendanceModel";

const router = express.Router();

router.get("/:employeeID", async (req, res) => {
  const { employeeID } = req.params;
  try {
    const attendanceRecords = await AttendanceModel.find({ employeeID });

    if (attendanceRecords.length === 0) {
      res.status(200).json({ employeeID, attendance: 0, totalWorkedHours: 0, totalWorkedDays: 0 });
      return;
    }

    let totalWorkedHours = 0;
    for (let i = 0; i < attendanceRecords.length; i++) {
      const record = attendanceRecords[i];
      if (record.clockIn && record.clockOut) {
        const hoursWorked =
          (record.clockOut.getTime() - record.clockIn.getTime()) / (1000 * 60 * 60);
        totalWorkedHours += hoursWorked;
        if (record.hoursWorked !== hoursWorked) {
          record.hoursWorked = hoursWorked;
          await record.save();
        }
      }
    }

    const totalWorkedDays = totalWorkedHours / 8; 

    res.status(200).json({ employeeID, attendance: attendanceRecords, totalWorkedHours, totalWorkedDays });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
