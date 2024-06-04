import mongoose from "mongoose"

const studentOtherSchema=new mongoose.Schema({
    religion:{
        type:String
    },
    caste:{
        type:String
    },
    category:{
        type:String
    },
    physicallychallenged:{
        type:String,
    },
    castecertificatenumber:{
        type:String,
        unique:true,
        required:true
    },
    incomecertificatenumber:{
        type:String,
        unique:true,
        required:true
    },
    ewsnumber:{
        type:String,
        unique:true,
        
    },
    ricecardnumber:{
        type:String,
        unique:true,
        required:true
    },
    motheradharnumber:{
        type:String,
        required:true
    },
    bankname:{
        type:String,
        required:true
    },
    bankifsccode:{
        type:String,
        required:true
    },
    accountno:{
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

const Other=mongoose.model('Other',studentOtherSchema);
export default Other