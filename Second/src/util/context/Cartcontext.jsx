// step 1

import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const Cartcontext=createContext()

const CartProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [auth,setAuth]=useState(false)
   function addCart(product){
    console.log("add cart function called")
    const exists=cart.find((item)=>item.id===product.id)
    if(exists){
        toast.error("product already exists")
        return
    }
    setCart([...cart,{...product,qty:1}])
    toast.success("product added to cart")
    }

    // remove item
    const removeItem=(product)=>{
        setCart([...cart.filter((item)=>item.id!==product.id)])

    }
    //  clear cart
    const clearCart=()=>{
        setCart([])
        toast.success("cart cleared")
    }

    // increase quantity
    const increaseQty=(product)=>{
        const newcart=cart.map((item)=>item.id===product.id?{...product,qty:product.qty+1}:item)
        setCart([...newcart])
    }
    // increase quantity
    const decreaseQty=(product)=>{
        const newcart=cart.map((item)=>item.id===product.id && product.qty>1?{...product,qty:product.qty-1}:item)
        setCart([...newcart])
    }
    // total bill 
    const totalBill=()=>{
        const total=cart.reduce((acc,item)=>(acc+(item.qty*item.price)),0)
        return total
    }

    // login
    const login=()=>{
        setAuth(true)
        toast.success("login success")
    }
    const logout=()=>{
        setAuth(false)
        toast.success("logout success")
    }

    return (
        <Cartcontext.Provider value={{cart,addCart,removeItem,clearCart,increaseQty,decreaseQty,totalBill
            ,login,logout,auth
        }}>
{children}
        </Cartcontext.Provider>

    )
}
export default CartProvider