import mongoose from "mongoose";

const teacherSchema=new mongoose.Schema({
    teachername:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Teacher=mongoose.model("Teacher",teacherSchema);

export default Teacher;