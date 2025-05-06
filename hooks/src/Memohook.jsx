import React, { useState } from 'react'
import { useMemo } from 'react'
export const Memohook = () => {
    const [count,setCount]=useState(0)
    const [inputvalue,setInputvalue]=useState(1)

    function calculatedouble(num){
        console.log("calculate function called")
        let k=1
        for (let i=0;i<100000000;i++){
                k=k+i
        }
        return num*2
    }
    const value=useMemo(()=>calculatedouble(inputvalue),[inputvalue])

  return (
    <div>memohook

        <h3>double value={value}</h3>
        <button onClick={()=>{
            setCount(count+1)
            console.log("count updated")
            }}>click</button>
        <p>{count}</p>
        <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} />
    </div>
  )
}
