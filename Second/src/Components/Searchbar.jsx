import React,{useState} from 'react'


export const Searchbar = ({searchData}) => {
  // console.log(props)
    const [searchText,setSearchText]=useState();
    function getValue(e){
        // console.log(e.target.value)
        setSearchText(e.target.value)
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


