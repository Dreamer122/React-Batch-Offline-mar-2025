import React, { useState } from "react"

export function Header(){
    // console.log("Header component")
    // let name="React js"
            const [name,setName]= useState("react+vite")
//    function changename(){
//     // name="react+vite"
//     setName("react + vite")
//    }

    return(
        <div className="nav">
           <div className="left">
            <p>{name}</p>
           </div>
<div className="right">
    <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>blog</li>
        {/* <li> <button onClick={changename}>click me</button></li> */}
        <li> <button onClick={()=>{setName("reactjs")}}>click me</button></li>
    </ul>
</div>
        </div>
    )
}