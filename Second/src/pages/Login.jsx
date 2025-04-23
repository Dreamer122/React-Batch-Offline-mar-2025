import React from 'react'
import {useForm} from "react-hook-form"
import { DevTool } from '@hookform/devtools';
import { useContext } from 'react';
import { Cartcontext } from '../util/context/Cartcontext';
export const Login = () => {
  const {login}=useContext(Cartcontext)
  const form=useForm()
  // console.log(form)
  const {register,control,handleSubmit,formState}=form
  // const {name,ref,onchange,onblur}=register
  const {errors}=formState;
 const submitForm=(data)=>{
  console.log(data)
  login()
 }

  return (
    <div>
      <h3>LOGIN FORM</h3>
      <div className='login-form w-1/2 mx-auto my-5 border text-center'>
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"  id="email"
          {...register("email",{
            required:true,
            pattern:{
              value:"",
              message:""
            }
          })}
          className='border m-4'/>
          {
            errors.email? errors.email.message:""
          }
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" 
          {...register("password",{
            required:{
              value:true,
              message:"password is required"
            },
            minLength:{
              value:5,
              message:"min 5 char required"
            }
          })}
          id="password" className='border m-4' />
          <span>

          {
            errors.password?errors.password.message:""
          }
          </span>
        </div>

        <div>
          <input type="submit" value="login" className='border-pink-700 border-2 rounded px-4 py-2 cursor-pointer' />
        </div>


      </form>
      </div>
     
      <DevTool control={control} placement="top-right" />

    </div>
  )
}
