import React from 'react'
import { NavLink } from 'react-router';
import { ChartPie,BookImage,ImagePlus,UserRoundCog } from 'lucide-react';
export const Sidebar = () => {
    const sidebarLinks=[
        {text:"Summary",path:"/",icons:ChartPie},
        {text:"All posts",path:"/allposts",icons:BookImage},
        {text:"Create Post",path:"/createpost",icons: ImagePlus},
        {text:"Settings",path:"/settings",icons:UserRoundCog },

    ]
  return (
   <>
   <div className='h-4/5 w-3/12 p-6 bg-blue-950 text-blue-300 sticky left-0'>

    <div>
        <ul className=''>
            {
                sidebarLinks.map((items,index)=>{
                    let Icon=items.icons
                    return(
                        <li key={index} className='my-5 text-2xl'><NavLink to={items.path} className={"flex gap-2"}><Icon size={30}/>{items.text}</NavLink></li>
                    )
                })

            }
        </ul>

    </div>
   </div>
   
   </>
  )
}
