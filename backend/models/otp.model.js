import mongoose  from "mongoose";

const OTPSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

const OTP=mongoose.model("OTP",OTPSchema);
export default OTP;