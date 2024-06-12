import mongoose from "mongoose";

interface Meeting {
  employeeID: string;
  date: Date;
  time: string;
  eventName: string;
}

const meetingSchema = new mongoose.Schema<Meeting>({
  employeeID: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  eventName: { type: String, required: true },
});

const MeetingModel = mongoose.model<Meeting>("Meeting", meetingSchema);

export default MeetingModel;