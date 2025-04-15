import React, { useState } from 'react'

export const AccordionSection = ({question,answer,isOpen,setIsOpen}) => {

    // const [isOpen,setIsOpen]=useState(false)
    

  return (
    <>
    <div className='Accordion border'>
        <div className='Question flex justify-between'>
            <p>{question}</p>
             <button className='bg-gray-800 text-white px-4 py-2 cursor-pointer rounded'
              onClick={setIsOpen}
              >hide/show</button>
        </div>
       {
        isOpen &&  <p className='Answer'>{answer}</p>
       }
    </div>
    </>
  )
}
