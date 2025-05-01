import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from 'react-router'
export const EmployeeForm = ({isEdit=false,defaultValue=null}) => {
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors,isSubmitSuccessful },
      } = useForm({
        defaultValues:defaultValue
      })
      const navigate=useNavigate()
    
      const submitForm= async (data)=>{
        // event.preventDefault()
        console.log(data)
        if(isEdit){
          const res=await axios.put(`http://localhost:3000/employess/${defaultValue.id}`,data)
          console.log(res)
          alert("Employee Updated Successfully")
       console.log("update")
        navigate("/")
        }
        else{

          // post data to json server
          const res=await axios.post("http://localhost:3000/employess",data)
          console.log(res)
          alert("Employee Added Successfully")
        // reset form after submission
        if(isSubmitSuccessful &&  !isEdit){
          reset({
            firstName:"",
            lastName:"",
            department:"",
            email:"",
            phone:"",
            address:"",
            joiningDate:"",
            salary:"",
            designation:""
          })
        }
      }

        // reset form after submission


      }
      useEffect(()=>{
        reset(defaultValue)
      },[defaultValue])


  return (
   <>
   <div>
   <form className='flex flex-col gap-4 ms-4 mt-4' onSubmit={handleSubmit(submitForm)}>
      <input type="text" placeholder='First Name' className='border-2 border-gray-300 rounded-md p-2' {...register("firstName",{
        required: {
            value:true,
            message:"First Name is required"
        },
        maxLength: {
            value: 20,
            message: "First Name cannot exceed 20 characters"
        },
        minLength: {
            value: 3,
            message: "First Name must be at least 3 characters long"
        },
        pattern: {
            value: /^[A-Za-z]+$/i,
            message: "First Name can only contain letters"
        }
      })}/>
        {errors.firstname && <span className='text-red-500'>{errors.firstname.message}</span>}
      <input type="text" placeholder='Last Name' className='border-2 border-gray-300 rounded-md p-2' {...register("lastName",{
        required: {
            value:true,
            message:"Last Name is required"
        },
      })}/>
      <select className='border-2 border-gray-300 rounded-md p-2 m-5 w-1/4' {...register("department")} >
      <option selected disabled>Select Department</option>
      <option value="HR">HR</option>
      <option value="IT">IT</option>
      <option value="Finance">Finance</option>
      <option value="Marketing">Marketing</option>
      <option value="Sales">Sales</option>
      <option value="Admin">Admin</option>
      <option value="Design">Design</option>
      <option value="Data Science">Data Science</option>
      <option value="Quality Assurance">Quality Assurance</option>
      <option value="Management">Management</option>
      </select>
      <input type="email" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2' {...register("email")}/>
      <input type="number" placeholder='age' className='border-2 border-gray-300 rounded-md p-2' {...register("age")}/>
      <input type="text" placeholder='Phone Number' className='border-2 border-gray-300 rounded-md p-2' {...register("phone")}/>
      <input type="text" placeholder='Address' className='border-2 border-gray-300 rounded-md p-2' {...register("address")}/>
      <input type="date" placeholder='Date of Joining' className='border-2 border-gray-300 rounded-md p-2' {...register("joiningDate")}/>
      <input type="number" placeholder='Salary' className='border-2 border-gray-300 rounded-md p-2' {...register("salary")}/>
      <input type="text" placeholder='Designation' className='border-2 border-gray-300 rounded-md p-2' {...register("...designation")}/>
      <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md' type='submit'>Add Employee</button>
    </form>
   </div>
   </>
  )
}
