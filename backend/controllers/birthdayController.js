import Birthday from "../models/Birthday.js";
import asyncHandler from "../middleware/asyncHandler.js";

// Default path for creating month
const createMonth = asyncHandler(async (req, res, next) => {
    const {name, monthId, events} = req.body;
    
    const month = await Month.create({
        name, monthId, events
    });

    res.json(month);
})