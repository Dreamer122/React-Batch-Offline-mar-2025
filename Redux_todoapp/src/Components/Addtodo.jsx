import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../Feature/todoSlice'
export const Addtodo = () => {
    const dispatch=useDispatch()
    const [task,settask]=useState("")

    const Addtask=()=>{
        dispatch(addTodo(task))
        settask("")
        console.log("tasked added")
    }

  return (
    <>
    <div className='w-full text-center'>
        <input type="text" value={task} onChange={(e)=>settask(e.target.value)} className='w-4/6 h-8 border-b border-pink-700 text-white outline-0' placeholder='enter task' />
        <button className='bg-pink-700 text-white rounded py-2 px-4' onClick={Addtask}>Add Task</button>
    </div></>
  )
}
