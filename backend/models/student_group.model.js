import mongoose  from "mongoose";

const StudentGroupSchema=new mongoose.Schema({
    secondlanguage:{
        type:String,
        required:true
    },
    group:{
        type:String,
        required:true
    },
    majors:{
        type:String,
        required:true
    },
    minors:{
        type:String,
        required:true
    },
    student:{
        type:String,
        required:true
    }
},{timestamps:true})

const Group=mongoose.model('Group',StudentGroupSchema);

export default Group;