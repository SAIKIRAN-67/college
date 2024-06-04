import mongoose from "mongoose"

const AddressSchema=new mongoose.Schema({
    houseno:{
        type:String,
    },
    district:{
        type:String,
    },
    street:{
        type:String,
    },
    secretriat:{
        type:String,
    },
    mandal:{
        type:String,
    },
    pincode:{
        type:Number,
    },
    village:{
        type:String,
    },
    student:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:true})

const Address=mongoose.model('Address',AddressSchema);

export default Address
