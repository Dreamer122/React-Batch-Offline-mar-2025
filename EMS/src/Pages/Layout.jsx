import React from 'react'
import { Outlet } from 'react-router'
import { Sidebar } from '../Components/Sidebar'
export const Layout = () => {
  return (
    <>
    <div className='flex w-full'>
        <div className='w-1/4'>
           <Sidebar/>
        </div>
        <div className='w-3/4 bg-gray-100 h-screen p-4'>
            <Outlet/>
        </div>
    </div>
    
    </>
  )
}
