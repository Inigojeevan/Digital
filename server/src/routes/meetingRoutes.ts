import express from "express";
import MeetingModel from "../schema/meetingSchema";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { employeeID, date, time, eventName } = req.body;
  try {
    const newMeeting = new MeetingModel({ employeeID, date, time, eventName });
    await newMeeting.save();
    res.status(200).json({ message: "Meeting added successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/:employeeID/:date", async (req, res) => {
  const { employeeID, date } = req.params;
  try {
    const meetings = await MeetingModel.find({ employeeID, date });
    res.status(200).json(meetings);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
