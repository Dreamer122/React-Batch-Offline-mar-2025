import React,{useState} from 'react'


export const Searchbar = () => {
    const [searchText,setSearchText]=useState();
    function getValue(e){
        // console.log(e.target.value)
        setSearchText(e.target.value)
        // console.log(searchText)

    }

  return (
   <>
   <div>
    <input type="text" onChange={getValue}  value={searchText} /> <button>search</button>
   </div>
   </>
  )
}
