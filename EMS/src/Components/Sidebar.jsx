import React from 'react'
import { LayoutDashboard ,UserRoundPlus,User, Settings } from 'lucide-react';
import { NavLink } from 'react-router';
export const Sidebar = () => {
    const links=[
        { name: "Dashboard", path: "/",icons: <LayoutDashboard /> },
        { name: "Employees", path: "/employees" ,icons: <UserRoundPlus /> },
        { name: "Add Employee", path: "/addemployee" ,icons: <User /> },
        { name: "Settings", path: "/settings" ,icons: <Settings /> },
    ];
  return (
    <>
    
    <aside className='bg-blue-800 text-white h-screen w-full p-4 text-2xl'>
        <div className="sidebar">
            <h2 className='border-b-2 border-b-gray-300 text-center'>EMS</h2>
            <ul className='my-6'>
                {links.map((link, index) => (
                    <li key={index} className='my-4 border rounded border-gray-300 p-2 hover:bg-white hover:text-blue-800'>
                        <NavLink to={link.path} className={({isActive})=>`flex gap-2 
                        ${isActive?"bg-white text-blue-800":"text-white bg-blue-800"}`}> <span className='relative top-1'>{link.icons} </span> {link.name}</NavLink>
                    </li>
                ))}
            </ul>
            </div>
        </aside>
        
        </>
  )
}
