import axios from 'axios'
import React, {  useEffect ,useState} from 'react'


export const Dashboard = () => {
  const [empData, setEmpData] = useState([])
  const [department, setDepartment] = useState(0)
  const [activeUser, setActiveUser] = useState(0)
  const [averageSalary, setAverageSalary] = useState(0)

const getDepartment=()=>{
  let dep=[]
  empData?.forEach((emp)=>{
    if(!dep.includes(emp.department)){
      dep.push(emp.department)
    }
  })
  setDepartment(dep.length)
}

const getActiveUser=()=>{
 const activeusers=empData?.filter((emp)=> emp.status==="active")
  setActiveUser(activeusers.length)
}
const avgsalary=()=>{
  let avg=empData?.reduce((acc,emp)=> {
    console.log() 
   return acc+Number(emp.salary)
  },0)
  console.log(avg)
  setAverageSalary((avg/empData.length).toFixed(2))
}

const x=async ()=>{
  let d= await axios.get("http://localhost:3000/employess")
  console.log(d)
  setEmpData(d.data)
}


  useEffect(()=>{
   x()

  },[])
  
  useEffect(()=>{
    getDepartment()
    getActiveUser()
    avgsalary()
  },[empData])


  return (
   <>
   <h2>Dashboard</h2>
  <div className='grid grid-cols-2 gap-4'>
    <div className='bg-blue-500 text-white p-4 rounded-lg'>
      <h3>Total Employees</h3>
      <p>{empData.length}</p>
    </div>

    <div>
      <h3>Total Departments</h3>
      <p>{department}</p>
    </div>
    <div>
      <h3>Active Users</h3>
      <p>{activeUser}</p>
    </div>
    <div>
      <h3>Average Salary</h3>
      <p>{averageSalary}</p>
    </div>
    </div>
   </>
  )
}
