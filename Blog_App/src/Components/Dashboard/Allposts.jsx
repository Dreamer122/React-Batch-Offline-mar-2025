import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { databases } from '../../appwrite/Config'
import {Query} from "appwrite"
import { UserPost } from './UserPost'
import { setAllPost } from '../../redux/Slices/postSlice'
import toast from "react-hot-toast"
import { getAllPost } from '../../utils/Allpost'
export const Allposts = () => {
  const {user}=useSelector((state)=>state.auth)
  // const [alldocs,setAllDocs]=useState([])
  const {allUserPost}=useSelector((state)=>state.posts)
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()

  const getpostdata=async()=>{
    setLoading(true)
    
  const data=await getAllPost(user.userId)
      // setAllDocs(documents.documents)
      dispatch(setAllPost(data))
      setLoading(false)
    
  }

  // delete post 
  const deletePost=async(id)=>{
    const check=confirm("are you sure?")
    if(check){

    try{
      const res=await databases.deleteDocument(
         import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_POST_COLLECTIONID,
        id

      )
      console.log("after deleting",res)
       getAllPost()
      toast.success("post deleted successfully")

    }catch(error){
      console.log("error occured while deleting post",error)
    }
    }


  }
useEffect(()=>{
  getpostdata()
},[])

if(loading){
  return (
    <>
    <h2>Loading...</h2>
    </>
  )
}
  return (
  <>
  <div className="flex flex-wrap">
  {
    allUserPost.length==0?"no docs found":
    allUserPost?.map((doc,index)=>{
      return(
<UserPost key={doc.$id} doc={doc} deletePost={deletePost} />
    )
    })
  }
  </div>
  </>
  )
}
