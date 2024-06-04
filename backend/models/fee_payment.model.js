import mongoose from "mongoose";

const FeeSchema=new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true,
    },
    group:{
        type:String,
        required:true
    },
    paymentmethod:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    studentid:{
        type:String,
        required:true
    },
    utrnumber:{
        type:String
    }
})

const Fee=mongoose.model('Fee',FeeSchema);

export default Fee;