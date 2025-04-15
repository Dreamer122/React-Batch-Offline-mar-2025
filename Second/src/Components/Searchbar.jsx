import React,{useState,useRef, useEffect} from 'react'

import { searchData } from '../util/helper';

export const Searchbar = ({products,setFilterData}) => {
  console.log("searchbar comp")
    const [searchText,setSearchText]=useState("");
     const inputref= useRef(1)
     console.log(inputref)
     const pref=useRef(null)

     const setValue=()=>{
      inputref.current.value="hello"
      // inputref.current.style.backgroundColor="green"
      inputref.current.focus()
     }

    function getValue(e){
        // console.log(e.target.value)
        setSearchText(e.target.value)
        // searchData(searchText)
        // console.log(searchText)

    }
    useEffect(()=>{
      setValue()
      pref.current.innerText="this is p tag"
    })

  return (
   <>
   <div className='py-5 bg-violet-400 px-2 rounded-md text-center w-1/2 mx-auto my-5'>
    <input type="text" onChange={getValue}  value={searchText}
    ref={inputref}
    className='bg-white border border-gray-400 h-8 md:w-80 mr-3' />
     <button onClick={()=>{
 setFilterData(searchData(products,searchText))
      }} className='bg-violet-800 text-white py-3 px-4 rounded-lg'>search</button>
   
   </div>
   <p ref={pref}>hello</p>
   </>
  )
}


