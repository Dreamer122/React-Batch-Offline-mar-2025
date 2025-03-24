export const Section=(props)=>{ 
   
    const {data}=props
//    console.log(data)
    const {image,title,price,category}=data 
    // const [image1]=images  
    return(
<>
<div className="card">
    <img src={image} alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p>{title}</p>
    <p>{category}</p>
    <p>{price}</p>
</div>


</>
    )
}
