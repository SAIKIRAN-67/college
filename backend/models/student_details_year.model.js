import mongoose from 'mongoose';
const StudentYearSchema=new mongoose.Schema({
    nameofcollege:{
        type:String,
    },
    year:{
        type:String
    },
    place:{
        type:String
    },
    student:{
        type:String,
        required:true
    }
},{timestamps:true})

const StudentYear=mongoose.model('StudentYear',StudentYearSchema);

export default StudentYear;