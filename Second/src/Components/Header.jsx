import React, { useState } from "react"
import { NavLink ,Link} from "react-router-dom"
export function Header(){
   
            const [name,setName]= useState("react+vite")


    return(
        <div className="nav">
           <div className="left">
            <p>{name}</p>
           </div>
<div className="right">
    <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li> <NavLink to={"/about"}>about</NavLink></li>
        <li> <NavLink to={"/contact"}>contact</NavLink></li>
        <li> <NavLink to={"/Blog"}>blogs</NavLink></li>
        
        {/* <li> <button onClick={changename}>click me</button></li> */}
        <li> <button onClick={()=>{setName("reactjs")}}>click me</button></li>
    </ul>
</div>
        </div>
    )
}