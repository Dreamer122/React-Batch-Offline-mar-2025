import React, { useState,useEffect, use } from 'react'
import axios from 'axios';
import { EmployeeCard } from '../Components/EmployeeCard';
export const Viewemp = () => {
    const [empData, setEmpData] = useState([])
    const [department, setDepartment] = useState("")
    const [filteredData,setFilteredData]=useState([])
    const [totalPage,setTotalPage]=useState(0)

    const [page,setPage]=useState(1)
  

    const getEmpData = async () => {
          try{
           const res=await axios.get(`http://localhost:3000/employess/?_page=${page}&_per_page=4`)
           console.log(res)
          //  let d= res.data
          setEmpData(res.data.data)
        setFilteredData(res.data.data)
        setTotalPage(res.data.pages)
           
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

    // delete employee
    const deleteEmp=async(id)=>{
      try{
        const check=confirm("Are you sure you want to delete this employee?")
        if(check){
          const res=await axios.delete(`http://localhost:3000/employess/${id}`)
          console.log(res)
          alert("Employee deleted successfully")
         let d= getEmpData()
         setFilteredData(d)
          setEmpData(d)
        }
      
    }
    catch(errr){
      console.log("Error while deleting employee",errr)
    }
    }

    useEffect(() => {
     getEmpData()
}, [page])

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
    { filteredData?.length>0?
      filteredData?.map((emp)=>{
        return(
          <EmployeeCard key={emp.id} emp={emp}  deleteEmp={deleteEmp}/>
        )
      })
      :<h2 className='text-4xl font-semibold'>No Employees Found</h2>
    }
   </div>
    <div className='flex justify-center items-center'>
      <button className='bg-blue-500 text-white rounded-md p-2 m-5 disabled:bg-blue-300'  disabled={page==1?true:false} onClick={()=>setPage(page-1)}>Previous</button>
      <h3 className='text-blue-800'>{page}</h3>
      <button className='bg-blue-500 text-white rounded-md p-2 m-5  disabled:bg-blue-300' disabled={page==totalPage?true:false} onClick={()=>setPage(page+1)}>Next</button>
    </div>
   </>
  )
}
