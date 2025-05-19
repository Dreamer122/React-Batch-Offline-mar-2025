import React from 'react'
import { useForm } from 'react-hook-form'
import { account } from '../appwrite/Config'
import { setUser,logout } from '../redux/Slices/authSlice'
import {useDispatch,useSelector} from "react-redux"


export const Login = () => {
  const {register,handleSubmit}=useForm()
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.auth)
  console.log(data)

  const login= async(data)=>{
  console.log(data)

    try{
      const response=await account.createEmailPasswordSession(data.email,data.password)
      console.log(response)
      dispatch(setUser(response))
    }
    catch(error){
      console.log("error occured while login",error)
    }
  }

  const LogoutAccount= async()=>{
    const resp=await account.deleteSession(data.user.$id)
    console.log(resp)
    dispatch(logout())
    alert("logout successfully")


  }

  return (
  <>
  <div>
    <h2 className='text-xl '>LOGin</h2>
    <div className='w-4/6 mx-auto bg-green-300'>
      <form action="" onSubmit={handleSubmit(login)}>
        <input type="email" placeholder='email' {...register("email")} className='border mb-3' /> <br />
        <input type="password" placeholder='enter password' {...register("password")}  className='border mb-3'/>
     <br />
        <input type="submit" value="login"  className='bg-green-600 text-white py-2 px-3 rounded'/>
      </form>
    </div>
  </div>
  <div>
    <button onClick={LogoutAccount}>Logout</button>
  </div>
  </>
  )
}
