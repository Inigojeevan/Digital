"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskboardSchema_1 = __importDefault(require("../schema/taskboardSchema"));
const router = express_1.default.Router();
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskID, title, projectName, priority, date, employeeID } = req.body;
    try {
        const newTask = new taskboardSchema_1.default({
            taskID,
            title,
            projectName,
            priority,
            date,
            employeeID,
        });
        yield newTask.save();
        res.status(200).json({ message: "Task added successfully" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.get("/:employeeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID } = req.params;
    try {
        const tasks = yield taskboardSchema_1.default.find({ employeeID });
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.put("/update/:employeeID/:taskID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID, taskID } = req.params;
    const { title, projectName, priority, date } = req.body;
    try {
        const task = yield taskboardSchema_1.default.findOneAndUpdate({ employeeID, taskID }, { title, projectName, priority, date }, { new: true });
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task updated successfully", task });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
router.delete("/delete/:employeeID/:taskID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID, taskID } = req.params;
    try {
        const task = yield taskboardSchema_1.default.findOneAndDelete({ employeeID, taskID });
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", task });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
