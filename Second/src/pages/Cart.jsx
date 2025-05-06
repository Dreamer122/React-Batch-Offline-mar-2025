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
  )
}
