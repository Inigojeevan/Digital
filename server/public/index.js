"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const attendanceRouter_1 = __importDefault(require("./routes/attendanceRouter"));
const leaveRouter_1 = __importDefault(require("./routes/leaveRouter"));
const clockRoutes_1 = __importDefault(require("./routes/clockRoutes"));
const meetingRoutes_1 = __importDefault(require("./routes/meetingRoutes"));
const taskBoardRoutes_1 = __importDefault(require("./routes/taskBoardRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000 || process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//mongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    throw new Error("MongoURI is missing");
}
mongoose_1.default
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err, "Error connecting to MongoDB"));
app.use("/attendance", attendanceRouter_1.default);
app.use("/leave", leaveRouter_1.default);
app.use("/clock", clockRoutes_1.default);
app.use("/meetings", meetingRoutes_1.default);
app.use("/taskboard", taskBoardRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong" });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
