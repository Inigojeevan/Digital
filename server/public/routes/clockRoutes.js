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
const attendanceModel_1 = __importDefault(require("../schema/attendanceModel"));
const router = express_1.default.Router();
router.post("/clockIn/:employeeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID } = req.params;
    const clockInTime = new Date();
    try {
        const attendanceRecord = new attendanceModel_1.default({
            employeeID,
            date: clockInTime,
            clockIn: clockInTime,
            clockOut: null,
            hoursWorked: 0,
        });
        yield attendanceRecord.save();
        res.status(200).json({ message: "Clocked in successfully", clockInTime });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}));
router.post("/clockOut/:employeeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID } = req.params;
    const clockOutTime = new Date();
    try {
        const attendanceRecord = yield attendanceModel_1.default.findOne({
            employeeID,
            clockOut: null,
        });
        if (!attendanceRecord) {
            res.status(400).json({ message: "No clock in record found" });
        }
        else {
            attendanceRecord.clockOut = clockOutTime;
            attendanceRecord.hoursWorked =
                (attendanceRecord.clockOut.getTime() -
                    attendanceRecord.clockIn.getTime()) /
                    3600000;
            yield attendanceRecord.save();
            res
                .status(200)
                .json({ message: "Clocked out successfully", clockOutTime });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
