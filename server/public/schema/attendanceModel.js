"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const attendanceSchema = new mongoose_1.default.Schema({
    employeeID: { type: String, required: true },
    date: { type: Date, required: true },
    clockIn: { type: Date, required: true },
    clockOut: { type: Date },
    hoursWorked: { type: Number, required: true },
});
const AttendanceModel = mongoose_1.default.model("Attendance", attendanceSchema);
exports.default = AttendanceModel;
