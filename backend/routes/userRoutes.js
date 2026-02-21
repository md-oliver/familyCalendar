import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
    res.json({message: "User Profile"})
})

export default userRouter;