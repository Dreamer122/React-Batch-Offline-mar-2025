import React, { useEffect } from 'react'
import { EmployeeForm } from '../Components/EmployeeForm'
import {useParams} from 'react-router'
import axios from 'axios'
export const Updateemp = () => {
  const {id}=useParams()
  const [empdata,setEmpdata]=React.useState({})
const getempdata=async()=>{
  const res=await axios.get(`http://localhost:3000/employess/${id}`)
  const data=res.data
  setEmpdata(data)
  console.log(data)

}
useEffect(()=>{
  getempdata()
},[])

  return (
   <>
   <h1>update employee</h1>
   <EmployeeForm isEdit={true} defaultValue={empdata}/>
   </>
  )
}
