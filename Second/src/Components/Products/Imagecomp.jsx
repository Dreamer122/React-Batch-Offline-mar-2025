import React from 'react'

export const Imagecomp = (props) => {
  return (
    <div className='imagebar' style={{display:"flex"}}>
        <div className='products_images'>
            {

    props.images?.map((url,i)=>{
        return (
            <div key={i} className="">
           <img src={url} alt="image"  className='images_size'/>
            </div>
        )
    })
            }

        </div>
        <div className='thumbnail_image'>
            <img src={props.thumbnail} alt="" className='images_size' />

        </div>


    </div>
  )
}
