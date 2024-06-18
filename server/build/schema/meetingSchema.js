"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const meetingSchema = new mongoose_1.default.Schema({
    employeeID: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    eventName: { type: String, required: true },
});
const MeetingModel = mongoose_1.default.model("Meeting", meetingSchema);
exports.default = MeetingModel;
