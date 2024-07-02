import mongoose from "mongoose";

export const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://waqar:waqar392936@cluster0.xc35al6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DB Connected")
}