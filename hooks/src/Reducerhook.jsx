import React, { act, useReducer, useState } from 'react'

export const Reducerhook = () => {
    // const [count,setCount]=useState(0)
    const reducerfun=(state,action)=>{
        console.log("function",state,action)

        if(action.type=="increment"){
            return {
                ...state,
                count:state.count+1
            }
        }
        else if(action.type=="decrement"){
            return {
                ...state,
                count:state.count-1
            }
        }
        else if(action.type=="text"){
            return {
                ...state,
               input:action.inputtext
            }
        }
    }
    const [state,dispatch]=useReducer(reducerfun,{
        count:0,
        input:""
    })
    console.log("component updated")
  return (
  <>
  <h1>Use Reducer hook</h1>

<button onClick={()=>dispatch({type:"increment"})}>{state.count} increment</button>
<button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
<input type="text" value={state.input} onChange={(e)=>dispatch({type:"text",inputtext:e.target.value})} />
 <h3>{state.input}</h3>
  </> 
  )
}
