import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDesc = () => {
    const {id}=useParams()
    // console.log(params.id)
    // call api with id 1

  return (
    <div>
        <div className="left">

    {/* images  */}
    <p> product description</p>
    

        </div>

<div className="right">

</div>
    </div>
  )
}
