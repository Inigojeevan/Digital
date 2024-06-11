import mongoose from "mongoose";

interface Leave {
    employeeID: string;
    annualLeaveBalance: Number;
}

const leaveSchema = new mongoose.Schema <Leave>({
    employeeID: {type: String, required: true},
    annualLeaveBalance: {type: Number, required: true},
});

const LeaveModel = mongoose.model <Leave>("Leave", leaveSchema);

export default LeaveModel;