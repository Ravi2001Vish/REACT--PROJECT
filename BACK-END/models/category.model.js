import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CategoryShema = new Schema({
    name:{
        type:String,
        required:true
    },
  desctiption:{
    type:String,
    required:true
  },
    image:{
        type:String,
        default:null
    },


    status:{
        type:Number,
        default:1
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
})

export default mongoose.model("Category" , CategoryShema)