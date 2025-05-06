import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Section=(props)=>{ 
   
    const {data,addCart}=props
//    console.log(data)
    const {image,title,price,category,id}=data 
    // const [image1]=images  
    return(
<>
<div className="h-96 w-[300px] shadow-xl mb-5 px-3 py-5 hover:-translate-y-1.5 transition  duration-200 ease-linear">
<Link className="" 
style={{textDecoration:"none"}}  to={`/products/${id}/${title}`}>
    <img src={image} className="mix-blend-multiply" alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p className="truncate">{title}</p>
    <p>{category}</p>
    <p>{price}</p>
    <FaStar className="text-amber-400 text-3xl"/>
    </Link>
    <button onClick={()=>addCart(data)}
     className="px-6 py-2 rounded w-full bg-purple-700 text-white">Add to cart</button>

</div>


</>
    )
}
