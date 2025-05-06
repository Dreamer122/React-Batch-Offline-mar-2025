import React, { useState } from "react"
import { NavLink ,Link,useNavigate} from "react-router-dom"
import useOnline from "../util/useOnline"
<<<<<<< HEAD
import { FaCartShopping } from "react-icons/fa6";
export function Header({length}){
=======
import { useContext } from "react"
import { Cartcontext } from "../util/context/Cartcontext"
export function Header(){
    const {cart,auth,logout}=useContext(Cartcontext)
    
>>>>>>> 1474a4b6e8c93a6be5e99d55934d4f8deb8575b4
   
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
<<<<<<< HEAD
        <li> <NavLink to={"/cart"} className="flex"><FaCartShopping /> <span>{length}</span></NavLink></li>

=======
        <li> <NavLink to={"/cart"}>cart <span>{cart.length}</span></NavLink></li>
>>>>>>> 1474a4b6e8c93a6be5e99d55934d4f8deb8575b4
        
        {/* <li> <button onClick={changename}>click me</button></li> */}
        {/* <li> <button onClick={()=>{setName("reactjs")}}>click me</button></li> */}
        {/* <li> <button onClick={loggedin}>click me</button></li> */}
      {auth &&  <li> <button className="bg-purple-950 text-white px-3 py-2 rounded" onClick={logout}>logout</button></li>}
        <button onClick={()=>navigate(-1)}>prev</button>
        <button onClick={()=>navigate(1)}>next</button>
        <li>{online?"🟢":"🔴"}</li>
    </ul>
</div>
        </div>
    )
}