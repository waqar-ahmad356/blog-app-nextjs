import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../Assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
  const [email,setEmail]=useState("");
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("email",email);
    const response=await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.message)
      setEmail("")
      
    }
    
    else{
      toast.error("Error")
    }
   

  }

  return (
    <div className='px-5 py-5 md:px-12 lg:px-28'>
    <div className='flex justify-between items-center'>
      
        <Image src={assets.logo} width={180}  alt='Logo' className='w-[130px] sm:w-auto cursor-pointer' />
        <button className='flex items-center gap-2 border border-solid border-black py-1 px-3 sm:px-6 sm:py-3 shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow}/></button>
    
    </div>
    <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blog</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
    <form onSubmit={onSubmitHandler} className='flex justify-between  max-w-[500px] mx-auto mt-10 border border-black scale-75 sm:scale-100 shadow-[-7px_7px_0px_#000000]' action=''>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email' className='pl-4 outline-none'></input>
        <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
    </form>
    </div>
  </div>
  )
}

export default Header
