import React from 'react'

export const Imagecomp = (props) => {
  return (
    <div className='imagebar'>
        <div className='products_images'>
            {

    props.imageArray.map(()=>{
        return (
            <div key={} className="">
           <img src={} alt="" />
            </div>
        )
    })
            }

        </div>
        <div className='thumbnail_image'>
            <img src={} alt="" />

        </div>


    </div>
  )
}
