export const Section=(props)=>{ 
   
    const {data}=props
   
    const {images,title,price,category}=data   
    return(
<>
<div className="card">
    <img src={images[0]} alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p>{title}</p>
    <p>{category}</p>
    <p>{price}</p>
</div>


</>
    )
}
