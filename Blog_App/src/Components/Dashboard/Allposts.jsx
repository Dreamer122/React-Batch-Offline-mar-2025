import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { databases } from '../../appwrite/Config'
import {Query} from "appwrite"
import { UserPost } from './UserPost'
import { setAllPost } from '../../redux/Slices/postSlice'
import toast from "react-hot-toast"

export const Allposts = () => {
  const {user}=useSelector((state)=>state.auth)
  const [alldocs,setAllDocs]=useState([])
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()

  const getAllPost=async()=>{
    try{
      setLoading(true)
      const documents=await databases.listDocuments(
        import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_POST_COLLECTIONID,
        [
          Query.equal("userId",user.userId)
        ]
      )
      setAllDocs(documents.documents)
      dispatch(setAllPost(documents.documents))
      console.log(documents)

    }
    catch(error){
      console.log("error occured while fetching documents",error)
    }
    finally{
      setLoading(false)
    }
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
  getAllPost()
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
    alldocs.length==0?"no docs found":
    alldocs?.map((doc,index)=>{
      return(
<UserPost key={doc.$id} doc={doc} deletePost={deletePost} />
    )
    })
  }
  </div>
  </>
  )
}
