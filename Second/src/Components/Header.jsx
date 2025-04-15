import React, { useState } from "react"
import { NavLink ,Link,useNavigate} from "react-router-dom"
import useOnline from "../util/useOnline"
export function Header(){
   
    const navigate=useNavigate()
            const [name,setName]= useState("react+vite")
            const [islogin,setIslogin]=useState(false)

        const loggedin=()=>{
            setIslogin(!islogin)
            console.log(islogin)
            if(islogin){
                navigate("/blog")
            }
            else{
                console.log(islogin)
                navigate("/")
            }
        }

        const online=useOnline()

    return(
        <div className="flex justify-around flex-wrap  md:flex-nowrap bg-violet-600 text-white p-5 capitalize">
           <div className="left">
            <p className="text-2xl">{name}</p>
           </div>
<div className="right">
    <ul className="text-lg">
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/about"}>about</NavLink></li>
        <li> <NavLink to={"/contact"}>contact</NavLink></li>
        <li> <NavLink to={"/blog"}>blogs</NavLink></li>
        <li> <NavLink to={"/signup"}>signup</NavLink></li>
        <li> <NavLink to={"/login"}>login</NavLink></li>
        
        {/* <li> <button onClick={changename}>click me</button></li> */}
        {/* <li> <button onClick={()=>{setName("reactjs")}}>click me</button></li> */}
        <li> <button onClick={loggedin}>click me</button></li>
        <button onClick={()=>navigate(-1)}>prev</button>
        <button onClick={()=>navigate(1)}>next</button>
        <li>{online?"🟢":"🔴"}</li>
    </ul>
</div>
        </div>
    )
}