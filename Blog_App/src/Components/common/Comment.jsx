import React from 'react'
import {useForm} from "react-hook-form"
import { useSelector } from 'react-redux'
export const Comment = ({postComment}) => {
    const {loggedin}=useSelector((state)=>state.auth)
    const {register,handleSubmit,reset}=useForm()
   
  return (
   <div className='w-7/12 rounded shadow shadow-gray-400 h-fit px-4 py-3'>
    <div className='w-full'>
        <form action="" onSubmit={handleSubmit((data)=>postComment(data,reset))}>

       <textarea  id="" {...register("comment")}
         className='border border-gray-400 rounded w-full' placeholder='post comment here...'></textarea>
       <input type="submit" value="post comment"  className={`${loggedin?"bg-blue-600 text-white":"bg-blue-300"}`}/>
        </form>
    </div>
   </div>
  )
}
