import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../util/context/Cartcontext";
export const Section=(props)=>{ 
    const {addCart}=useContext(Cartcontext)
//    console.log(props)
    const {data}=props
//    console.log(data)
    const {image,title,price,category,id}=data 
    // const [image1]=images  
    return(
<>
<div className="h-96 w-[300px] shadow-xl mb-5 px-3 py-5 hover:-translate-y-1.5 transition  duration-200 ease-linear" style={{textDecoration:"none"}}>
<Link className="" to={`/products/${id}/${title}`}>
    <img src={image} className="mix-blend-multiply" alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p className="truncate">{title}</p>
    <p>{category}</p>
    <p>{price}</p>
    <FaStar className="text-amber-400 text-3xl"/>
</Link>
<button onClick={()=>addCart(data)} className="bg-gray-600 text-white rounded px-6 py-2">Add to Cart</button>
</div>


</>
    )
}
