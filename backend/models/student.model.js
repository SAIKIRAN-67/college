import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    mothername:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    adharnumber:{
        type:String,
        required:true,
        
    },
    interhallticketnumber:{
        type:String,
        required:true,
        unique:true,
    },
    intergroup:{
        type:String,
        required:true,
    },
    tenthhallticketnumber:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

const Student=mongoose.model('Student',studentSchema);

export default Student;