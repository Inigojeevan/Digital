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
router.get("/:employeeID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { employeeID } = req.params;
    try {
        const attendanceRecords = yield attendanceModel_1.default.find({ employeeID });
        if (attendanceRecords.length === 0) {
            res.status(200).json({ employeeID, attendance: 0, totalWorkedHours: 0, totalWorkedDays: 0 });
            return;
        }
        let totalWorkedHours = 0;
        for (let i = 0; i < attendanceRecords.length; i++) {
            const record = attendanceRecords[i];
            if (record.clockIn && record.clockOut) {
                const hoursWorked = (record.clockOut.getTime() - record.clockIn.getTime()) / (1000 * 60 * 60);
                totalWorkedHours += hoursWorked;
                if (record.hoursWorked !== hoursWorked) {
                    record.hoursWorked = hoursWorked;
                    yield record.save();
                }
            }
        }
        const totalWorkedDays = totalWorkedHours / 8;
        res.status(200).json({ employeeID, attendance: attendanceRecords, totalWorkedHours, totalWorkedDays });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
