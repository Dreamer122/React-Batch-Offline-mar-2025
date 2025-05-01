import React from 'react'
import { Link } from 'react-router';
import { View , UserPen, Trash2} from 'lucide-react';
export const EmployeeCard = ({emp,deleteEmp}) => {
  return (
    <>
    <div>
        <div className='border-2 border-gray-300 rounded-md p-5 m-5 w-3/4'>
            <img src={`https://api.dicebear.com/9.x/initials/svg?seed=${emp.firstName} ${emp.lastName}`} alt="Employee" className='rounded-full w-24 h-24 mx-auto'/>
            <h2 className='text-xl font-semibold text-center'>Employee Name {emp.firstName} {emp.lastName}</h2>
            <p className='text-gray-500 text-center'>Department {emp.department}</p>
            <p className='text-gray-500 text-center'>Position {emp.designation}</p>
           <Link to={`/viewemployee/${emp.id}`}> <button className='bg-blue-500 text-white rounded-md p-2 mt-3 w-full flex items-center justify-center'>  <View className='mx-2'/>View Details</button></Link>
          <Link to={`/updateemp/${emp.id}`}>  <button className='bg-green-600 text-white rounded-md p-2 mt-3 w-full flex items-center justify-center'>   <UserPen className='mx-2'/>edit</button> </Link>
            <button className='bg-red-600 text-white rounded-md p-2 mt-3 w-full flex items-center justify-center'
            onClick={()=>deleteEmp(emp.id)}>    <Trash2 className='mx-2'/>delete</button>
        </div>
    </div>
    </>
  )
}
