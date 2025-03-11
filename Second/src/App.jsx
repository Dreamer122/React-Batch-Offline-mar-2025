//  components
import React, {useState} from "react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { Section } from "./Components/Section";
import { resturant_array } from "./Components/Data";
import { Searchbar } from "./Components/Searchbar";

function App() {
        const [searchText,setSearchText]=useState("");
        const [filterData,setFilterData]=useState(resturant_array)
        // const filteredResturant = resturant_array.filter((resturant) => {
    
        function getValue(e){
            // console.log(e.target.value)
            setSearchText(e.target.value)
            console.log(searchText)
    
        }

        const searchData=()=>{
            const filterRestaurant=resturant_array.filter((res)=>{
                return( res.restaurant_name.includes(searchText))
            })
            console.log("filterRestaurant",filterRestaurant)
            setFilterData(filterRestaurant)
        }
    
  return (
    <>
      <Header />
      <div>
        <h2>Restaurant List</h2>
      {/* <Searchbar/> */}

      <div>
    <input type="text" onChange={getValue}  value={searchText} /> <button onClick={searchData}>search</button>
   </div>
      </div>
      <div className="restaurants">
        {filterData.map((obj, i) => {
          return <Section data={obj} key={i} />;
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
