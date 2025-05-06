import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
export const Singleemployeedetails = () => {
    const {id}=useParams()
    const [empdata,setEmpData]=useState({})

const getEmpData=async ()=>{
    try{
        const res=await axios.get(`http://localhost:3000/employess/${id}`)
        const data=res.data
        setEmpData(data)
    }
    catch(err){
        console.log("Error while fetching data",err)
    }

}

    useEffect(
       ()=>{
        getEmpData()
       },[]
    )
  return (
   <>
   <div>
    <h2>Employee Details</h2>
    <div>
        <div>
            <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${empdata.firstName} ${empdata.lastName}`} alt="Employee" className='rounded-full w-24 h-24 mx-auto'/>
           <h4 className='text-4xl text-center font-bold'>{empdata.firstName} {empdata.lastname}</h4>
        </div>
        <div className='text-center'>
            
         <p>   department: {empdata.department}</p>
<p>            designation: {empdata.designation}</p>
<p>  email: {empdata.email}</p>
<p>         phone number: {empdata.phone}</p>
<p>           address: {empdata.address}</p>
            <p>          date of joining: {empdata.joiningDate}</p>
            <p>         salary: {empdata.salary}</p>
            <p>        age: {empdata.age}</p>
            <p>       department:{empdata.department}</p>
        </div>
    </div>
    </div>
    
   </>
  )
}
