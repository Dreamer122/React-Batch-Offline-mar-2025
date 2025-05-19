import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteTodo,updateTodo } from '../Feature/todoSlice'
import { useDispatch } from 'react-redux'

export const TodoList = () => {
    const dispatch=useDispatch()
    const [edit,setEdit]=useState("")
    const [edittext,setEditText]=useState("")
    const data=useSelector((state)=>state.todo)
    // console.log(data.todo)
    const alltodo=data.todo
    const save=(id)=>{
        dispatch(updateTodo({id,edittext}))
        setEdit("")

    }
  return (
    <>
   <div className='mt-3 bg-blue-950 p-2' >
    {
        alltodo?.map((obj,index)=>
            <div className='flex justify-between mb-2' key={obj.id}>
              {edit==obj.id ? 
              <>
              
              <input type="text" value={edittext} onChange={(e)=>setEditText(e.target.value)} />
              <button className='text-white px-2 py-1 rounded bg-green-600 mx-3'  onClick={()=>save(obj.id)}>
                    save</button>
                <button className='text-white px-2 py-1 rounded bg-red-600' onClick={()=>{
                    let check=confirm("are you sure!")
                    if(check){
                    dispatch(deleteTodo(obj.id))
                    }
                }}>delete</button>
                </>
            
             :
             <>
             <p className='text-white capitalize' > {obj.text}</p>
                <div>

                <button className='text-white px-2 py-1 rounded bg-green-600 mx-3' onClick={()=>{
                    setEdit(obj.id)
                    setEditText(obj.text)
                    }}>
                    edit</button>
                <button className='text-white px-2 py-1 rounded bg-red-600' onClick={()=>{
                    let check=confirm("are you sure!")
                    if(check){
                    dispatch(deleteTodo(obj.id))
                    }
                }}>delete</button>
                </div>
                </>
                }
                </div>
        )
    }
   </div>
    </>
  )
}
