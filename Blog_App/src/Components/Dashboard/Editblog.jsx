import React, { useEffect, useState } from 'react'
import { BlogForm } from './BlogForm'
import {useParams} from "react-router"
import {useSelector} from "react-redux"
import { databases } from '../../appwrite/Config'
import toast from "react-hot-toast"
export const Editblog = () => {
    const{id,blogid}=useParams()
    const [loading,setLoading]=useState(false)
    const {allUserPost}=useSelector((state)=>state.posts)
    const [singleBlog,setSingleBlog]=useState({})
    const filterpost=()=>{
    const blogpost= allUserPost.filter((obj)=>obj.$id==blogid)
    if(blogpost.length>0){

        setSingleBlog(blogpost[0])
    }
   

    }

    useEffect(()=>{
        filterpost()
    },[blogid])
    if(!singleBlog){

        return(
        <p>no blog foundwith this id</p>
        )
    }

const Onsubmit=async(data)=>{
    try{
        setLoading(true)
    const response=await databases.updateDocument(
        import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_POST_COLLECTIONID,
        blogid,
        {
            content:data.blogDescription,
            title:data.title,
            thumbnail:data.thumbnail,
            tags:data.tags,
            Category:data.Category,
            published:data.published


        }
    )
    console.log("updated blog",response)
    toast.success("blog updated successfully")
    }
    catch(error){
        console.log("error occured while updating",error)
        toast.error(error.message)
    }

    finally{
        setLoading(false)
    }

}


  return (
   <>
  
   <BlogForm isEdit={true} defaultValue={singleBlog} Onsubmit={Onsubmit} loading={loading}/>
   </>
  )
}
