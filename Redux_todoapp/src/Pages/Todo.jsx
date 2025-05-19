import React from 'react'
import { Addtodo } from '../Components/Addtodo'
import { TodoList } from '../Components/TodoList'
export const Todo = () => {
  return (
  <>
  <div>
{/* todo */}

<div className='flex flex-col items-center justify-center  bg-blue-950 h-screen '>
    <h1 className='text-white'>MY TODO APP</h1>
    <div className='w-6/12 shadow bg-blue-900 py-5 px-6'>

        <div>
            <Addtodo/>
        </div>
        <div>
            <TodoList/>
        </div>
    </div>
</div>
  </div>
  </>
  )
}
