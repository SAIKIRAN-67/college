import express from "express"
import {signin, signout, signup, verifyOtp} from "../controllers/auth.controller.js"

const router=express.Router();

router.post("/signup",signup);

router.post("/signin",signin);

router.post("/verifyotp",verifyOtp);

router.post('/signout',signout);

export default router;