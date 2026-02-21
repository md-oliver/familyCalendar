import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import asyncHandler from "./middleware/asyncHandler.js";
import Month from "./models/Month.js";
import cors from "cors";

import birthdayRouter from "./routes/birthdayRouter.js";
import anniversaryRouter from "./routes/anniversaryRouter.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
config();
connectDB();

app.use(cors());

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
    "/",
    asyncHandler(async (req, res, next) => {
        const months = await Month.find({})
            .populate("events.birthdays")
            .populate("events.anniversaries")
            .exec();

        res.json(months);
    }),
);

// app.post('/login', (req, res, next) => {

// })

app.use("/profile", userRouter);
app.use("/birthday", birthdayRouter);
app.use("/anniversary", anniversaryRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: "Path not found" });
});

app.listen(PORT, () => {
    console.log("Server listening on port: ", PORT);
});
