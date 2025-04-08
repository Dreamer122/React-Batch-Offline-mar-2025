import { useState,useEffect } from "react"
function useCallApi(url){

const [singledata,setSingleData]=useState(null)

async function getsingledata(){
  const response = await fetch(url)
  const data=await response.json()
  console.log(data)
  setSingleData(data)

}

useEffect(()=>{
  getsingledata()
},[url])

return singledata

}
export default useCallApi