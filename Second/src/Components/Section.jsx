export const Section=(props)=>{
    // console.log(props.data.restaurant_name)
   
    return(
<>
<div className="card">
    <img src={props.data.image} alt="burger king" style={{height:"200px",width:"90%",marginInline:"12px"}}/>
    <p>{props.data.restaurant_name}</p>
    <p>{props.data.cuisine}</p>
</div>

</>
    )
}
// export {Section}
