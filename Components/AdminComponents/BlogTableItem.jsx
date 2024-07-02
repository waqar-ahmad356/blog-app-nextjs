import Image from 'next/image'
import React from 'react'
import { assets } from '../../Assets/assets'

const BlogTableItem = ({authorImage,title,author,date,deleteBlog,mongoId}) => {
    const blogDate=new Date(date);
  return (
    <tr className='bg-white border-b'>
    <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
    <Image width={40} height={40} src={authorImage?authorImage:assets.profile_icon}/>
    {author?author:"no author"}

    </th>
    <td className='py-6 px-6 '>
        {title?title:"No title"}
    </td>
    <td className='py-6 px-6 '>
       {blogDate.toDateString()}
    </td>
    <td className='py-6 px-6 cursor-pointer ' onClick={()=>deleteBlog(mongoId)}>
      X
    </td>
      
    </tr>
  )
}

export default BlogTableItem
