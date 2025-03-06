//  components 
// import { Fragment } from "react";
import React, { Fragment } from "react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer"
import "./App.css"
import { Section } from "./Components/Section";

function App(){
    let resturant_array=[
        {
            restaurant_name:"Burger king",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFhHUwuJmJ7CrqWgpY7BmhFpRUtjzOb3_2w&s",
            cuisine:"Burger"
        },
        {
            restaurant_name:"Dakshin",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsUSK0Cz3yHBYbZNvM6OmZJCwzORgboHqlQ&s",
            cuisine:"South India"

        }
        ,
        {
            restaurant_name:"Pizza hut",
            image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/29/29e46475-55d5-4a18-a901-3c14fdd5ba79_1012175.jpg",
            cuisine:"Italian"
        }
    ]
    
   
    return (
      
        <>
        <Header/>
        <div className="restaurants">

      <Section data={resturant_array[0]}/>
      <Section data={resturant_array[1]}/>
      <Section data={resturant_array[2]}/>
        </div>
      {/* {Section()} */}
      {/* <Section/>
      <Section/> */}
       <Footer/>
     
    </>
    )

}
export default App;
