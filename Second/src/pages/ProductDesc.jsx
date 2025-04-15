import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import  { Imagecomp } from "../Components/Products/Imagecomp"
import { AccordionWrapper } from '../Components/Accordion/AccordionWrapper'

import useCallApi from '../util/useCallApi'
export const ProductDesc = () => {
    const param=useParams()

    console.log(param)
    const {id,title}=param
    // console.log(params.id)
    // call api with id 1

  const singledata=useCallApi(`https://fakestoreapi.com/products/${id}`)

  return (
    <>
    <div style={{display:"flex"}}>
        <div className="left_desc">
{/* <Imagecomp images={singledata.images} thumbnail={singledata.thumbnail}/> */}
{/* <Imagecomp images={singledata.images} thumbnail={singledata.thumbnail}/> */}
   
    <img src={singledata?.image} alt=""  style={{height:"300px"}}/>

        </div>

<div className="right">

<h3>{singledata?.title}</h3>
<p>{singledata?.description}</p>
<p>{singledata?.price}</p>
{/* <p>{singledata.rating}</p> */}
</div>
    </div>

    <div className='m-auto w-1/2 border'>
      <h2 className='text-center text-2xl'>FAQ</h2>
      <AccordionWrapper />
    </div>
    </>
  )
}
