import React from 'react'
import { EmployeeForm } from '../Components/EmployeeForm'

export const AddEmp = () => {
  return (
  <>
  <h2 className='text-4xl font-semibold ms-4'>ADD NEW EMPLOYEE</h2>
  <div>
    {/* form for 
    add employee
    inputs 

    firstname
    lastname
    department
    email
    phone number
    address
    date of joining
    salary
    designation
    age
    */}
    <EmployeeForm/>
    
  </div>
  </>
  )
}
