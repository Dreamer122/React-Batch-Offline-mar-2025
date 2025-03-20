import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import  { Imagecomp } from "../Components/Products/Imagecomp"

export const ProductDesc = () => {
    const param=useParams()

    console.log(param)
    const {id,title}=param
    // console.log(params.id)
    // call api with id 1

    const [singledata,setSingleData]=useState({})

async function getsingledata(){
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const data=await response.json()
  console.log(data)
  setSingleData(data)

}

useEffect(()=>{
  getsingledata()
},[])

  return (
    <div style={{display:"flex"}}>
        <div className="left_desc">
<Imagecomp images={singledata.images} thumbnail={singledata.thumbnail}/>
   
    

        </div>

<div className="right">

<h3>{singledata.title}</h3>
<p>{singledata.description}</p>
<p>{singledata.price}</p>
<p>{singledata.rating}</p>
</div>
    </div>
  )
}
