import mongoose from 'mongoose';

const StudentLast7YearsSchema=mongoose.model({
    intersecondyear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    interfirstyear:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    tenthclass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    ninethclass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    eighthclass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    seventhclass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    sixthclass:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StudentYear'
    },
    student:{
        type:String,
        required:true
    }
},{timestamps:true})

const StudentPastYears=mongoose.model('StudentPastYears',StudentLast7YearsSchema);
export default StudentPastYears;