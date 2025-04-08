
import React from 'react'
import { Home } from './Home'
import { useState,useEffect } from 'react'

export const About = () => {
  const [count,setCount]=useState(0)
  const [count1]=useState(0)

  useEffect(()=>{
    // call api
    console.log("call api")
  },[count])
  console.log("about compo")
  return (
    <div>About
      {console.log("jsx rendered")}
      <h1>HOme component</h1>
    <Home name={"monika"}/>
    <h2> ABout component</h2>
    <button onClick={()=>setCount(count+1)}>Click me</button>
    <p>Count: {count}</p>
    </div>
  )
}
