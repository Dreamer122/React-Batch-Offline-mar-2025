//  components
import React, {useState,useEffect, use} from "react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { Section } from "./Components/Section";
import { resturant_array } from "./Components/Data";
import { Searchbar } from "./Components/Searchbar";

function App() {
        // const [searchText,setSearchText]=useState("");
        const [filterData,setFilterData]=useState([])
        const [products,setProducts]=useState([])
      

        const searchData=(searchstring)=>{
            const filterRestaurant=products.filter((res)=>{
                return( res.title.toLowerCase().includes(searchstring.toLowerCase()))
            })
            console.log("filterRestaurant",filterRestaurant)
            setFilterData(filterRestaurant)
        }

const  callApi= async ()=>{
    const resp=await fetch("https://fakestoreapi.com/products");
    const data=await resp.json()
    setProducts(data)
    setFilterData(data)
    console.log("data",data)
}

        useEffect(()=>{
          callApi()
          console.log("useEffect")
        },[])
    
        // console.log("after useeffect")
  return (
    <>
      <Header />
      <div>
        <h2>Restaurant List</h2>
      <Searchbar searchData={searchData} />

      <div>
    {/* <input type="text" onChange={getValue}  value={searchText} /> <button onClick={searchData}>search</button> */}
   </div>
      </div>
      <div className="restaurants">
        {filterData?.map((obj, i) => {
          return <Section data={obj} key={i} />;
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
