import React,{useState} from 'react'


export const Searchbar = ({searchData}) => {
  console.log("searchbar comp")
    const [searchText,setSearchText]=useState("");
    function getValue(e){
        // console.log(e.target.value)
        setSearchText(e.target.value)
        // searchData(searchText)
        // console.log(searchText)

    }

  return (
   <>
   <div>
    <input type="text" onChange={getValue}  value={searchText} /> <button onClick={()=>searchData(searchText)}>search</button>
   </div>
   </>
  )
}


