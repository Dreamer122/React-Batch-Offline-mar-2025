import React,{lazy,Suspense ,useEffect, useState} from 'react'

// import { ContactForm } from '../Components/ContactForm'

const ContactForm=lazy(()=>import("../Components/ContactForm"))
export const Contact = () => {
  //  useEffect(()=>{
  //     document.title="About"
  //   },[])
  const [show,setShow]=useState(false);
  return (
    <div>Contact
<button onClick={()=>setShow(true)} className='bg-purple-500 text-purple-900 px-5 py-2 rounded'>click me</button>

{show?<Suspense fallback={<h3 className='text-5xl text-bold'>Loading contact form</h3>}> <ContactForm/></Suspense> :""}
    </div>
  )
}
