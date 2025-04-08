import { FaStar } from "react-icons/fa";
export const Section=(props)=>{ 
   
    const {data}=props
//    console.log(data)
    const {image,title,price,category}=data 
    // const [image1]=images  
    return(
<>
<div className="">
    <img src={image} className="mix-blend-multiply" alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p className="truncate">{title}</p>
    <p>{category}</p>
    <p>{price}</p>
    <FaStar className="text-amber-400 text-3xl"/>

</div>


</>
    )
}
