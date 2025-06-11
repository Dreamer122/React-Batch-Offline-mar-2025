import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {stripHtml} from "../Components/common/Blogsnippet"
import { databases } from '../appwrite/Config'
import { Query ,ID} from 'appwrite'
import { Comment } from '../Components/common/Comment'
import { useSelector } from 'react-redux'
import toast from "react-hot-toast"
import { Like } from '../Components/common/Like'
export const BlogView = () => {
    const {id}=useParams()
    const {loggedin,user}=useSelector((state)=>state.auth)
    
    const [singlepost,setSinglepost]=useState({})
    const [userData,setUserData]=useState({})
    const [allcomments,setAllComments]=useState([])
    const getsinglepost=async()=>{
        try{
            // get post data
            const singledoc=await databases.getDocument(
                import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_POST_COLLECTIONID,
                id
            )
            // console.log("post",singledoc)
            setSinglepost(singledoc)
            // get user data
            const user=await databases.listDocuments(
                import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_USER_COLLECTIONID,
                [Query.equal("userId",singledoc.userId)]
            )

            // console.log("user",user)
            setUserData(user.documents[0])


        }
        catch(error){
            console.log("error occured while getting data",error)
        }

    }
    // get all comments
    const getallcomments=async()=>{
        try{
            const resp=await databases.listDocuments(
                  import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_COMMENT_COLLECTION_ID,
                [Query.equal("postId",id)]
            )
            // console.log("comments",resp)
            setAllComments(resp.documents)
        }
        catch(error){
            console.log("error occured while fetching all comments",error)
        }

    }


    // comment scetion
    
    const postComment=async(data,reset)=>{
       
        if(!loggedin){
            toast.error("please login first to post a comment")
        }
        else{
            try{
             const res=  await databases.createDocument(
                      import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_COMMENT_COLLECTION_ID,
                    ID.unique(),
                    {
                        postId:id,
                        userId:userData.userId,
                        content:data.comment
                    }
                )
               
              
                // update post collection
                await databases.updateDocument(
                      import.meta.env.VITE_DATABASEID,
                        import.meta.env.VITE_POST_COLLECTIONID,
                        id,
                        {
                            comment:[...singlepost.comment,res.$id]
                        }
                )
                getallcomments()
                toast.success("comment posted")
               reset({
                comment:""
               })
            }catch(error){
                console.log("error while commenting",error)
                toast.error("error occured")
            }
        }
        
    }


    useEffect(()=>{
        getsinglepost()
        getallcomments()
    },[id])
  return (
   <>
 
<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src={userData?.profilePic} alt={userData?.name}/>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{userData?.name}</a>
                          <p className="text-base text-gray-500 dark:text-gray-400">{userData?.bio}</p>
                          <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">{singlepost?.$updatedAt}</time></p>
                      </div>
                  </div>
                  <div className=''>
                    <Like postId={id} userId={user.userId}/>

                  </div>
              </address>
              <img src={singlepost?.thumbnail} alt="thumbnail" className='w-6/12 h-80' />
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-200 lg:mb-6 lg:text-4xl dark:text-white">{singlepost?.title}</h1>
          
          </header>
          <div className='flex gap-4'>
            {singlepost?.tags?.map((tag)=>{
                return(
                    <p key={tag} className='px-4 py-2 w-fit rounded-full bg-gray-600 text-gray-300'>{tag}</p>
                )
            })}
          </div>
          <div className='text-sm text-gray-200' dangerouslySetInnerHTML={{ __html: singlepost?.content }}>
           
          </div>

        
  
 

   </article>
   </div>
  </main>
  <Comment postComment={postComment}/>
 <div className='w-7/12 border border-gray-400 rounded'>
 {
    allcomments?.map((cmt)=>{
        return(
            <div className='m-3 border-2 shadow-2xl rounded-2xl'>
                <p>{cmt.content}</p>
                <p>{cmt.$createdAt}</p>
                </div>


        )

    })
 }

 </div>
   </>
  )
}
