import React from 'react'
import {Blogsnippet} from "./Blogsnippet"
import { Link } from 'react-router'

export const BloghomeCard = ({post}) => {
    const {title,thumbnail,content,tags,$id}=post
  return (
  <>
  <div className='w-fit h-fit p-4 rounded bg-gray-900 text-gray-100'>
  <Link to={`/viewblogpost/${$id}`}>  <img src={thumbnail} alt={title} className='w-full h-52' /></Link>
    <p>{title}</p>

    <div>
        <Blogsnippet content={content}/>
    </div>

  </div>
  </>
  )
}
