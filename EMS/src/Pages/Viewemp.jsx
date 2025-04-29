import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { EmployeeCard } from '../Components/EmployeeCard';
export const Viewemp = () => {
    const [empData, setEmpData] = useState([])
    const [department, setDepartment] = useState("")
    const [filteredData,setFilteredData]=useState([])


    const getEmpData = async () => {
      try{
       const res=await axios.get("http://localhost:3000/employess")
       console.log(res)
       setEmpData(res.data)
        setFilteredData(res.data)
      }
      catch(err){
        console.log("Error while fetching data",err)
      }
    }

    // filter data through department
    const filterBydepartment=(e)=>{
      setDepartment(e.target.value)
      console.log(e.target.value)
      if(e.target.value==="All"){
        setFilteredData(empData)
        return
      }
      // filter data through department
      const filtervalues=empData.filter((emp)=> emp?.department===e.target.value)
      console.log(filtervalues)
    setFilteredData(filtervalues)

    }

    useEffect(() => {
      getEmpData()
}, [])
  return (
   <>
   <h2 className='text-4xl font-semibold ms-5'>All Employees</h2>
   <div>
    {/* search bar  */}
    <input type="text" className='border-2 border-gray-300 rounded-md p-2 m-5 w-2/4' placeholder='Search Employee'/>
    {/* search by department with select   */}
    <select className='border-2 border-gray-300 rounded-md p-2 m-5 w-1/4' onChange={filterBydepartment}>
      <option value="" selected disabled>Select Department</option>
      <option value="All">All</option>
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
   </div>

   <div className='flex flex-wrap justify-center'>
    {/* cards */}
    {
      filteredData?.map((emp,indx)=>{
        return(
          <EmployeeCard key={emp.id} emp={emp} />
        )
      })
    }
   </div>
   </>
  )
}
