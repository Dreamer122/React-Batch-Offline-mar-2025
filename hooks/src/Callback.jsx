import React, { useCallback, useState } from 'react'
import { Childcomp } from './Childcomp'
// monika@myapp
export const Callback = () => {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    console.log("parent component rendered")
    const handleclick=useCallback( ()=>{
        setCount2(count2+2)
        console.log("handleclick function")
    },[count2]) // it freeze refrence of this function
  return (
   <>
   <div className='left_margin'>

   <button onClick={()=>setCount(count+1)}>click</button>
   <p>{count}</p>
   <Childcomp text="hello Callback child" handleclick={handleclick} count2={count2}/>
   </div>
   </>
  )
}
