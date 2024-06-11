import express from "express";
import LeaveModel from "../schema/leaveModel";

const router = express.Router();

router.get("/:employeeID", async (req, res) => {
    const {employeeID} = req.params;
    try{
        const leaveRecords = await LeaveModel.find({employeeID});
        if(!leaveRecords){
            const defaultLeave = 20;
            res.status(200).json({employeeID, leaveBalance: defaultLeave});
        } else {
            res.status(200).json({employeeID, leaveBalance: leaveRecords});
        }
    } catch (error) {
        res.status(500).json({error: (error as Error).message});  
    }
});

export default router;