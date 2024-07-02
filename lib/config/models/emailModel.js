import mongoose from "mongoose";

const emailSchema=new mongoose.Schema({
    email:{type:String,required:true},
    date:{type:Date,default:Date.now()}
})


const emailModel=mongoose.models.emails || mongoose.model("emails",emailSchema);

export default emailModel;