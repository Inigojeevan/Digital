import mongoose from "mongoose";

interface Attendance {
    employeeID: string;
    date: Date;
    clockIn: Date;
    clockOut: Date;
    hoursWorked: Number;
}

const attendanceSchema = new mongoose.Schema <Attendance>({
    employeeID: {type: String, required: true},
    date: {type: Date, required: true},
    clockIn: {type: Date, required: true},
    clockOut: {type: Date },
    hoursWorked: {type: Number, required: true},
});

const AttendanceModel = mongoose.model <Attendance>("Attendance", attendanceSchema);

export default AttendanceModel;