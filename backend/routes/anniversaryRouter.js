import { Router } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Month from '../models/Month.js';
import {} from "../controllers/anniversaryController.js";
import Anniversary from "../models/Anniversary.js";

const anniversaryRouter = Router();

anniversaryRouter.post('/', asyncHandler(async (req, res, next) => {

    const {description, date} = req.body;

    const anniDate = new Date(date).toLocaleDateString();
    const monthId =  Number(anniDate.split('/')[1]) -1;

    const getMonth = await Month.findOne({monthId});

    if(getMonth) {

        const anniversary = await Anniversary.create({
           of: description,
            date,
            monthId,
        })

        getMonth.events.anniversaries.push(anniversary);
        await getMonth.save();

        res.status(201).json(anniversary);

    } else {
        res.status(404);
        throw new Error('Cannot find the requested month');
    }


}));

export default anniversaryRouter;