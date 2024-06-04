import  mongoose from "mongoose";

const StudentDocumentsSchema=new mongoose.Schema({
    sscmarksheet:{
        type:String,
        required:true,
    },
    intermarksheet:{
        type:String,
        required:true,
    },
    studentadharcard:{
        type:String,
        required:true,
    },
    motheradharcard:{
        type:String,
        required:true
    },
    castecertificate:{
        type:String,
        required:true
    },
    rationcard:{
        type:String,
        required:true
    },
    incomecertificate:{
        type:String,
        required:true
    },
    motherbankpassbook:{
        type:String,
        required:true
    },
    studentphoto:{
        type:String,
        required:true
    },
    student:{
        type:String,
        required:true
    }
},{timestamps:true})

const Document=mongoose.model('Document',StudentDocumentsSchema);

export default Document;