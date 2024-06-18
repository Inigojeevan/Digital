"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskBoardSchema = new mongoose_1.default.Schema({
    taskID: { type: String, required: true },
    title: { type: String, required: true },
    projectName: { type: String, required: true },
    priority: { type: String, required: true, enum: ["low", "medium", "high"] },
    date: { type: Date, required: true },
    employeeID: { type: String, required: true },
});
const TaskBoardModel = mongoose_1.default.model("Taskboard", taskBoardSchema);
exports.default = TaskBoardModel;
