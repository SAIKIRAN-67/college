import Teacher from "../models/teacher.model.js";
import OTP from "../models/otp.model.js";
import nodemailer from "nodemailer";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
export const signup=async(req,res)=>{
    const {teachername,email,password}=req.body;
    const emailcheck=await Teacher.findOne({email});
    if(emailcheck){
        return res.status(400).json({error:"User already exist with this email"})
    }
    const hashedPassword=bcryptjs.hashSync(password,10);
    console.log({teachername,email,password})
    const teacher=new Teacher({teachername,email,password:hashedPassword});
    try {
        await teacher.save();
        var randomnumber=Math.floor(Math.random()*10000+10000);
        randomnumber=(randomnumber.toString()).substring(0,4);
        const otp=new OTP({userId:teacher._id.toString(),message:randomnumber});
        await otp.save();
        let transportmail=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"saikiran71021@gmail.com",
                pass:"zhoqisgssbhuyfra"
            }
        })
        let mailContent={
            from:"saikiran71021@gmail.com",
            to:email,
            subject:"veification",
            text:randomnumber
        }

        transportmail.sendMail(mailContent,(err,val)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("mail sent",val.response);
            }
        })
        res.status(201).json({message:"Acoount Created successfully,please verify your email for login(OTP sent to you email)",teacher:teacher});
    } catch (error) {
        console.log(error);
        res.status(400).json({error:"Error in creating user try again"})
    }
}
export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
          const validUser=await Teacher.findOne({email});
          if(!validUser) return res.status(404).json({error:"Inavlid email"})
          const validPassword=bcryptjs.compareSync(password,validUser.password);
          if(!validPassword) return res.status(404).json({error:"Inavlid Password"});
          if(validUser.verified==false){
            return res.status(400).json({error:"Please verify your email before login"});
          }
          const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
          const {password:pass,...rest}=validUser._doc
          res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
    } catch (error) {
        return res.status(400),json({error:"Internal server error try again"})
    }
}
export const verifyOtp=async(req,res)=>{
    try {
        const {otp,email}=req.body;
        console.log({otp,email});
        const user=await Teacher.findOne({email});
        if(!user){
            return res.status(400).send({error:"Enter correct email"})
        }
        console.log(user);
        const userId=user._id.toString(); 
        console.log(userId);
        const actualOtp=await OTP.findOne({userId});
        if(actualOtp.message!=otp){
            return res.status(400).json({error:"Incorrect Otp"})
        }
        const updateUser=await Teacher.findOneAndUpdate({email},{verified:true})
        return res.status(200).json({message:"verified"})

    } catch (error) {
        return res.status(400),json({error:"Internal server error try again"})
    }
}
export const signout=async(req,res,next)=>{
    try {
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out!');
    } catch (error) {
        next(error);
    }
}