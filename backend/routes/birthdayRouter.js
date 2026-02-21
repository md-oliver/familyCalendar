import { Router } from "express";
import {} from "../controllers/birthdayController.js";
import Month from "../models/Month.js";
import Birthday from "../models/Birthday.js";
import asyncHandler from "../middleware/asyncHandler.js";

 const birthdayRouter = Router();

 birthdayRouter.post('/', asyncHandler(async (req, res, next) => {
    
    const {description, date} = req.body;
    
    const birthdate = new Date(date).toLocaleDateString();
    const monthId = Number(birthdate.split('/')[1]) -1;

    const getMonth = await Month.findOne({monthId});

    if(getMonth) {

        const birthday = await Birthday.create({
            of: description,
            date,
            monthId,
        })

        getMonth.events.birthdays.push(birthday);
        await getMonth.save()

        res.status(201).json(birthday);
    } else {
        res.status(404);
        throw new Error('Cannot find the requested month');
    }

 }))


 export default birthdayRouter;