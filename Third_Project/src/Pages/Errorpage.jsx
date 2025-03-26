import React from 'react'
import { useRouteError } from 'react-router'
export const Errorpage = () => {
    const error = useRouteError()
    console.log(error)
  return (
   <>
   <h2>{error.status} {error.statusText}</h2>
   <h3>{error.data}</h3>
   </>
  )
}
