import React from 'react'
import { useContext } from 'react'
import { Cartcontext } from '../util/context/Cartcontext'
import { Navigate } from 'react-router-dom'
export const ProtectedRoute = ({children}) => {
    const {auth}=useContext(Cartcontext)
    if(auth){
        return children
    }
    else{
        return <Navigate to={"/login"}/>
    }
  
}
