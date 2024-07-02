import { connectDb } from "../../../../lib/config/db"
import {writeFile} from 'fs/promises'
import blogModel from "../../../../lib/config/models/blogModel";

const { NextResponse } = require("next/server")

const loadDB=async()=>{
    await connectDb();
}
loadDB();

//end point to get blogs data
export async function GET(request){
const blogId=request.nextUrl.searchParams.get("id")
if(blogId){
    const blog=await blogModel.findById(blogId)
    return NextResponse.json(blog)
}
else{
    const blogs=await blogModel.find({});
    return NextResponse.json({blogs})
}

}

//end point to post blog data 
export async function POST(request){
    const formData=await request.formData();
    const timestamp=Date.now();
    const image=formData.get("image");
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imageUrl=`/${timestamp}_${image.name}`
    const blogData={
        title:`${formData.get("title")}`,
        description:`${formData.get("description")}`,
        category:`${formData.get("category")}`,
        author:`${formData.get("author")}`,
        image:`${imageUrl}`,
        authorImage:`${formData.get("authorImage")}`,
       
    }
    await blogModel.create(blogData)
    console.log("Blog Saved")
    return NextResponse.json({success:true,message:"Blog added"})

}