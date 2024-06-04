import mongoose from "mongoose"

const contactSchema=new mongoose.Schema({
    mobilenumber:{
        type:String,
        required:true,
    },
    parentnumber:{
        type:String,
        required:true,
    },
    guardiannumber:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    student:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

const Contact=mongoose.model('Contact',contactSchema);

export default Contact;