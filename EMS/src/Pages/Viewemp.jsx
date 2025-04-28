import React, { useState,useEffect } from 'react'

export const Viewemp = () => {
    const [empData, setEmpData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/employess")
        .then((response) => response.json())
        .then((data) =>{console.log(data)})
    }
    , [])
  return (
    <div>Viewemp</div>
  )
}
