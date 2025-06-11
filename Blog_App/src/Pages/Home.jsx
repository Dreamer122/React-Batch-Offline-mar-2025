import React, { useEffect, useState } from 'react'
import { databases } from '../appwrite/Config'
import { BloghomeCard } from '../Components/common/BloghomeCard'
import { Query } from 'appwrite'
export const Home = () => {
  const [loading,setLoading]=useState(false)
  const [allpostHome,setallPostHome]=useState([])
  const getALlUserPost=async()=>{
    try{
      setLoading(true)
      const resp=await databases.listDocuments(
        import.meta.env.VITE_DATABASEID,
        import.meta.env.VITE_POST_COLLECTIONID,
        [Query.equal("published","publish")]
      )
     console.log("all post of users",resp)
      setallPostHome(resp.documents)

     


    }
    catch(error){
      console.log("error occured while fethcing all post",error)
    }
    finally{
      setLoading(false)
    }
  }
 
 

  useEffect(()=>{
    getALlUserPost()
  },[])
  return (
   <>

   {
loading?<p>loading...</p>:
<div className='w-11/12 mx-auto flex justify-around flex-wrap'>
{
allpostHome?.map((post)=>{
  return (
  <>
  <BloghomeCard key={post.$id} post={post}/>
  </>)
})
}
</div>

   }
   </>
  )
}
