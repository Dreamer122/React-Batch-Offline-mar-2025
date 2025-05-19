import React from 'react'
import { memo } from 'react'

// when the props are unchanged of child compo them memo prevents its redenreing
export const Childcomp = memo(({text,handleclick,count2}) => {
    console.log("child component rendered")
  return (
    <div>Childcomp

        <p>{text}</p>
        <button onClick={handleclick}>child button</button>
        <p>count2:{count2}</p>
    </div>
  )
})
