
//  components
import React, {useState,useEffect,} from "react";

import "./App.css";
import { Section } from "./Components/Section";
// import { resturant_array } from "./Components/Data";
import { Searchbar } from "./Components/Searchbar";
import { Loader } from "./Components/Loader";
import { Link } from "react-router-dom";
import useCallApi from "./util/useCallApi";
import useOnline from "./util/useOnline";


function App() {
        const [filterData,setFilterData]=useState([])
        const [products,setProducts]=useState([])


    const data=  useCallApi("https://fakestoreapi.com/products")
// console.log(data)

    useEffect(()=>{
      setProducts(data)
      setFilterData(data)

    },[data])

    const online= useOnline()

    if(!online){
      return (<h2 className="text-5xl"> NO internet connection....</h2>)
    }

  return (
    <>
      <div>
        <h2 className="text-5xl text-center my-4 ">Product list</h2>
      <Searchbar  products={products} setFilterData={setFilterData} />

      <div>
    {/* <input type="text" onChange={getValue}  value={searchText} /> <button onClick={searchData}>search</button> */}
   </div>
      </div>
      <div className="restaurants flex flex-wrap justify-around ">
        {
        (filterData?.length==0)?<Loader/>:
        filterData?.map((obj, i) => {
          // return <Link  key={obj.id} to={`/products/${obj.title.split(" ").join("-")}`}> <Section data={obj} /> </Link>;
          return <Link className="h-96 w-[300px] shadow-xl mb-5 px-3 py-5 hover:-translate-y-1.5 transition  duration-200 ease-linear" style={{textDecoration:"none"}} key={obj.id} to={`/products/${obj.id}/${obj.title}`}> <Section data={obj} /> </Link>;
        })}
      </div>

     
    
    </>
  );
}

export default App;
