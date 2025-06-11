import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setAllPost } from '../../redux/Slices/postSlice'
import { getAllPost } from '../../utils/Allpost'
export const Summary = () => {
  const [loading,setLoading]=useState(false)
  const {user}=useSelector((state)=>state.auth)
  const {allUserPost}=useSelector((state)=>state.posts)
  const {userInfo}=useSelector((state)=>state.user)
  // const {}
  const dispatch=useDispatch()

  // get user post
  const allpost=async()=>{
    setLoading(true)
    const data=await getAllPost(user.userId)
    console.log("data",data)
    dispatch(setAllPost(data))
    setLoading(false)
  }
 
useEffect(()=>{
 allpost()
},[])
  
  return (
    <>
    {
      loading?"Loading..":
      <div className='flex flex-wrap gap-4'>
        <div className='p-4 rounded shadow-2xl'>
          <p className='font-bold text-2xl capitalize'>total posts</p>
         <p className='text-xl text-gray-400'> {allUserPost?.length} </p>
        </div>

        <div className='p-4 rounded shadow-2xl w-6/12'>
          <p className='font-bold text-2xl'>BIO</p>
          <p className='text-xl text-gray-400 text-wrap '>{userInfo?.bio}</p>
        </div>

      </div>
    }
    
    </>
  )
}
