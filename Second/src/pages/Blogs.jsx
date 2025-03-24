import { useEffect } from "react"
import React from 'react'
import { Sidebar } from "../Components/Sidebar"
import { Outlet } from "react-router-dom"

export const Blogs = () => {
  //  useEffect(()=>{
  //     document.title="Blogs"
  //   },[])
  return (
    <div className="" style={
      {
        display: "flex",
        flexDirection: "row",
        height: "100vh",

      }
    }>

      <Sidebar/>
      <div className="blog-container">
      <Outlet/>
      </div>
    </div>
  )
}
