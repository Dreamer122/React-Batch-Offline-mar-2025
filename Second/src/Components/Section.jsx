export const Section=(props)=>{ 
    console.log("section compo")
    const {data}=props
    // console.log(data)
    const {cuisine,image,restaurant_name}=data   
    return(
<>
<div className="card">
    <img src={image} alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p>{restaurant_name}</p>
    <p>{cuisine}</p>
</div>

</>
    )
}
// export {Section}
