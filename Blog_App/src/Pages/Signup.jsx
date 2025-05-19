import React from 'react'
import {useForm} from "react-hook-form"
import { account,databases } from '../appwrite/Config'
import {ID} from "appwrite"
import {useNavigate} from "react-router"

export const Signup = () => {
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()
    const signup= async(data,e)=>{
        e.preventDefault()
        try{
        const user=  await account.create(ID.unique(),data.email,data.password)
        console.log(user)
       const res=await databases.createDocument(
            import.meta.env.VITE_DATABASEID,
            import.meta.env.VITE_USER_COLLECTIONID,
            ID.unique(),
            {
                email:data.email,
                name:data.name,
                userId:user.$id
            }

        )
        console.log("account createdd successfully",res)
        navigate("/login")


        }
        catch(error){
            console.log("error occured while signup",error)
        }

    }
  return (
    <>
    <div>
        <h2>Signup to create Posts</h2>
        <div>
            <form onSubmit={handleSubmit(signup)}>

            <input type="text" {...register("name")}   className='border'/> <br />
            <input type="email" {...register("email")} className='border'  /> <br />
            <input type="password" {...register("password")}  className='border' /> <br />
            <input type="submit" value="signup"  className='border'/>
            </form>

        </div>
    </div>
    </>
  )
}
