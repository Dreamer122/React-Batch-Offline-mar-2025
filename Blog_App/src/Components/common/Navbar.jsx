import React from 'react'
import { NavLinks } from '../../data/Navlinks'
import { NavLink ,Link} from 'react-router'
import { useSelector } from 'react-redux'

export const Navbar = () => {
  const {user,loggedin}=useSelector((state)=>state.auth)
  
  return (
   <>
   <div className='w-full h-[80px] bg-green-800 text-white'>
    <div className='flex justify-between items-center h-full'>
      <div>
        <p>logo</p>
        </div>
        <nav>
          <ul className='flex gap-5'>
{

    NavLinks.map((links)=>{
      return (
        <li>
          <NavLink to={links.path}
           className={({isActive})=>`${isActive?"bg-green-600 p-2 rounded":"hover:bg-green-600 p-2 rounded bg-green-800"}`}> {links.text} </NavLink></li>
      )
    })
   
}


  </ul>
        </nav>

        <div className='flex gap-2'>
          {
             loggedin &&  <Link to={"/dashboard"} className='py-2 px-3 bg-green-300 text-green-800 rounded'>Dashboard</Link> 
          }
          {
            loggedin &&  <button  className='py-2 px-3 bg-green-300 text-green-800 rounded'> logout</button> 
          }
          

          {
            !loggedin && <Link to={"/login"} className='py-2 px-3 bg-green-300 text-green-800 rounded'> Login</Link>
          }
          {
            !loggedin && <Link to={"/signup"} className='py-2 px-3 bg-green-300 text-green-800 rounded'> Signup</Link>
          }
        
      </div>
    </div>
   </div>
   </>
  )
}
