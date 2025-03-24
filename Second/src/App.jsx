//  components
import React, {useState,useEffect,} from "react";

import "./App.css";
import { Section } from "./Components/Section";
// import { resturant_array } from "./Components/Data";
import { Searchbar } from "./Components/Searchbar";
import { Loader } from "./Components/Loader";
import { Link } from "react-router-dom";


function App() {
        const [filterData,setFilterData]=useState([])
        const [products,setProducts]=useState([])
        
      

        const searchData=(searchstring)=>{
            const filterRestaurant=products.filter((res)=>{
                return(res.title.toLowerCase().includes(searchstring.toLowerCase()))
            })
            // console.log("filterRestaurant",filterRestaurant)
            setFilterData(filterRestaurant)
        }

const  callApi= async ()=>{
    // const resp=await fetch("https://fakestoreapi.com/products");
    const resp=await fetch("https://fakestoreapi.com/products");
    const data1=await resp.json()
  
    console.log(data1)
    setProducts(data1)
    setFilterData(data1)
    // console.log("data",data)
}

        useEffect(()=>{
         
          // document.title="Home"
            
          callApi()
          console.log("useEffect")

        },[])
    
        // console.log("after useeffect")
  return (
    <>
      <div>
        <h2>Product list</h2>
      <Searchbar searchData={searchData} />

      <div>
    {/* <input type="text" onChange={getValue}  value={searchText} /> <button onClick={searchData}>search</button> */}
   </div>
      </div>
      <div className="restaurants">
        {
        (filterData?.length==0)?<Loader/>:
        filterData?.map((obj, i) => {
          // return <Link  key={obj.id} to={`/products/${obj.title.split(" ").join("-")}`}> <Section data={obj} /> </Link>;
          return <Link  style={{textDecoration:"none"}} key={obj.id} to={`/products/${obj.id}/${obj.title}`}> <Section data={obj} /> </Link>;
        })}
      </div>

     
    
    </>
  );
}

export default App;
