import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../lib/config/db";
import emailModel from "../../../../lib/config/models/emailModel";

const loadDb=async()=>{
    await connectDb();
}
loadDb();

export async function POST(request){
    const formData=await request.formData();
    const emailData={
        email:`${formData.get('email')}`,
    }
    await emailModel.create(emailData);
    return NextResponse.json({success:true,message:"Email Subscribed"})
}