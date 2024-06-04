import express from "express"
import authrouter from "./routes/auth.routes.js"
import studentrouter from "./routes/student.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app=express();

dotenv.config();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authrouter);
app.use("/api/student",studentrouter);
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb");
})

app.listen(6767,()=>{
    console.log("server is listening in port number 6767")
})

