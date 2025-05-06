<<<<<<< HEAD
import React from 'react'

export const Cart = ({cart,removeProduct}) => {
  return (
  <>
  <h2>Cart</h2>
  <p>Items in cart: 0</p>
{
    cart.length==0?<h2 className='text-3xl text-center'> Your Cart is empty</h2>:
 cart?.map((prd)=>{
    return(
        <div key={prd.id} className='flex justify-around p-3 mb-2 bg-gray-300 rounded w-8/12 m-auto'>
    <div className="image w-2/12">
        <img src={prd.image} alt="" className='w-full h-[100px]'/>
    </div>
    <div className="title w-3/12">
        <h3 className='text-wrap'>Product Title {prd.title}</h3>
    </div>
    <div className="price">
       {prd.price}
    </div>
    <div className="quantity">
        <button className='bg-purple-400 text-white rounded px-3 py-1'>-</button>
       {/* <span>{prd.quantity}</span> */}
      <span className='text-xl mx-2 '>0</span>
        <button className='bg-purple-400 text-white rounded px-3 py-1'>+</button>
    </div>
    <div>
        <button onClick={()=>removeProduct(prd)} className='bg-red-600 text-white rounded px-5 py-3'>Remove</button>
    </div>
  </div>
    )
 })
 
}

  </>
=======
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Cartcontext } from "../util/context/Cartcontext"

export const Cart = () => {
  const { cart,removeItem,clearCart ,increaseQty,decreaseQty,totalBill} = useContext(Cartcontext)
  const [total,setTotal]=useState(0)
useEffect(()=>{
setTotal(totalBill())
},[cart])

  return (
   <>
   <h1 className='text-center text-3xl my-2'>Your Cart</h1>
  { cart.length!=0 && <button onClick={clearCart} className='bg-amber-600 rounded py-2 px-5'>clear cart</button>}
  
  <div className='flex gap-5 w-10/12 mx-auto border'>

   <div className='flex gap-4 flex-wrap justify-center'>

  
   {
    cart?.length==0 ? <h2 className=' text-3xl my-2'>Cart is empty</h2>:
    
    cart.map((item)=>{
      return(
        <div className='w-[200px] border p-4'>
          <img src={item.image} alt=""  className='w-full h-24'/>
          <h2>{item.title}</h2>
          <h2>Price:{item.price}</h2>
          
       <div className='flex justify-between'>
       <div> <button onClick={()=>increaseQty(item)} className='text-lg bg-gray-400 rounded py-1 px-2'>+</button> 
       <span>{item.qty}</span>
        <button onClick={()=> decreaseQty(item)} className='text-lg bg-gray-400 rounded py-1 px-2'>-</button> </div>
        <button onClick={()=>removeItem(item)} className='bg-red-600 text-white rounded px-4 py-2'>remove</button>
        </div>
        </div>
      )
    })
   }
  </div>
  <div className='sidebar w-4/12 border-l-2 p-4'>
  <p> total items : {cart.length}</p>
  <p> total bill:{total}</p>

  </div>

   </div>
   </>
>>>>>>> 1474a4b6e8c93a6be5e99d55934d4f8deb8575b4
  )
}
