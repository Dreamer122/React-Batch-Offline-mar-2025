import React, { useEffect, useState } from 'react'

import { Heart } from 'lucide-react';
import { databases } from '../../appwrite/Config';

import { Query,ID } from 'appwrite';
export const Like = ({postId,userId}) => {
    const [isLike,setIsLike]=useState(false)

    const likepost=async()=>{
        // get all likes
        try{

        const res=await databases.listDocuments(
             import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_LIKE_COLLECTION_ID,
                [
                Query.equal("postId",postId),
                Query.equal("userId",userId)
                ]
        )
        console.log(res)
        if(res.documents.length>0){
            // dislike
            await databases.deleteDocument(
                import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_LIKE_COLLECTION_ID,
                res.documents[0].$id
            )
            setIsLike(false)

        }
        else{
            // like
            await databases.createDocument(
                 import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_LIKE_COLLECTION_ID,
                ID.unique(),
                {
                    userId,
                    postId
                }

            )
            setIsLike(true)
        }
        }
        catch(error){
            console.log("error occured in like",error)
        }
    }
    useEffect(()=>{
        const prevLike=async()=>{
              const res=await databases.listDocuments(
             import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_LIKE_COLLECTION_ID,
                [
                Query.equal("postId",postId),
                Query.equal("userId",userId)
                ]
               
        )
         if(res.documents.length>0){
                    setIsLike(true)
                }
        }
        prevLike()
      
    },[])
  return (
   <>
   <div onClick={likepost} className={`${isLike?"bg-red-500":""} rounded-full w-fit h-fit p-3 bg-gray-300 cursor-pointer hover:scale-105 transition-transform transition-normal`}>
     <Heart className={`${isLike?"text-white":""}`} />
   </div>
   </>
  )
}
