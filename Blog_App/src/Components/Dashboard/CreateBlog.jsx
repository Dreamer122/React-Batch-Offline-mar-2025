import React,{useState} from 'react'
import { BlogForm } from './BlogForm'
import {storage,databases} from "../../appwrite/Config"
import {ID} from "appwrite"
import {useSelector} from "react-redux"
import toast from "react-hot-toast"

export const CreateBlog = () => {
  const {user}=useSelector((state)=>state.auth)
  const [loading,setLoading]=useState(false)


  const Onsubmit= async(data)=>{
    try{
      // STEP 1UPLOAD FILE TO BUCKET
      let thumbnailurl=""
      if(data.thumbnail && data.thumbnail[0]){
        setLoading(true)
      const response= await storage.createFile(
        import.meta.env.VITE_BUCKETID,
        ID.unique(),
        data.thumbnail[0]
      )
console.log("file upload result",response)
// GET URL FROM BUCKET 
 thumbnailurl=storage.getFileView(import.meta.env.VITE_BUCKETID,
  response.$id
)
      }
      console.log("url",thumbnailurl)
    // CREATE DOC OR POST BLOG IN DATABASE
    

    

    const doc=await databases.createDocument(
      import.meta.env.VITE_DATABASEID,
      import.meta.env.VITE_POST_COLLECTIONID,
      ID.unique(),
      {
        title:data.title,
        thumbnail:thumbnailurl,
        Category:data.Category,
        content:data.blogDescription,
        published:data.published,
        userId:user.userId,
        tags:data.tags
      }

    )
    console.log("doc",doc)
    setLoading(false)
    toast.success("blog created successfully")


    }
    catch(error){
      console.log(error)
       toast.error(error.message)
    }
    finally{
      setLoading(false)
    }

  }
  return (
 
    <>
      <BlogForm Onsubmit={Onsubmit} loading={loading}/>
    
    </>
  )
}
