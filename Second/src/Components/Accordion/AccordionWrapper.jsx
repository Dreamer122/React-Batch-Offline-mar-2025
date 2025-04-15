import React, { useState } from 'react'
import { AccordionSection } from './AccordionSection'

export const AccordionWrapper = () => {
  const [sectionIndex,setSectionIndex]=useState(null)

  const handleIndex=(index)=>{
    setSectionIndex((prev)=>prev==index?null:index)

  }

  const faq=[
    {question:"what is react",
      answer:"a library"
    },
    {question:"what is useState",
      answer:"a hook"
    },
    {question:"what is lifting state up",
      answer:"controlling child from parent component"
    },


  ]
    
  return (
   <>
   {
    faq.map((item,index)=>{
      return(
        <AccordionSection {...item} key={index}
        isOpen={sectionIndex==index}
        setIsOpen={()=>handleIndex(index)}
        />
      )
    })
   }
   </>
  )
}
