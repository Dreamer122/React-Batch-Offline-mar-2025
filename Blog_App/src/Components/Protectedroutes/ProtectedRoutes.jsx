import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from "react-router"
export const ProtectedRoutes = ({children}) => {
    
    const {loggedin}=useSelector((state)=>state.auth)
    if(loggedin){
        return children
    }
  else{
    return <Navigate to={"/login"}/>
  }
}
