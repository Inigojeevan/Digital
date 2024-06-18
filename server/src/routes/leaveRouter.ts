import express from "express";
import LeaveModel from "../schema/leaveModel";

const router = express.Router();

router.get("/:employeeID", async (req, res) => {
    const { employeeID } = req.params;
    try {
        const leaveRecord = await LeaveModel.findOne({ employeeID });
        if (!leaveRecord) {
            const defaultLeave = 20;
            res.status(200).json({ employeeID, leaveBalance: defaultLeave });
        } else {
            res.status(200).json({ employeeID, leaveBalance: leaveRecord.annualLeaveBalance });
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

router.post("/reduce", async (req, res) => {
    const { employeeID, daysTaken } = req.body;

    try {
        let leaveRecord = await LeaveModel.findOne({ employeeID });
        if (!leaveRecord) {
            const defaultLeave = 20;
            if (daysTaken > defaultLeave) {
                return res.status(400).json({ error: "Insufficient leave balance" });
            }
            leaveRecord = new LeaveModel({
                employeeID,
                annualLeaveBalance: defaultLeave - daysTaken
            });
        } else {
            const currentBalance = leaveRecord.annualLeaveBalance;
            if (currentBalance < daysTaken) {
                return res.status(400).json({ error: "Insufficient leave balance" });
            }
            leaveRecord.annualLeaveBalance = Number(currentBalance) - daysTaken;
        }

        await leaveRecord.save();

        res.status(200).json({ employeeID, newLeaveBalance: leaveRecord.annualLeaveBalance });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
