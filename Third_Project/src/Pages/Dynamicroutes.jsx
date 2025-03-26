import React from 'react'
import { useParams } from 'react-router'

export const Dynamicroutes = () => {
    const { id } = useParams()
  return (
    <div>Dynamicroutes id = {id}</div>
  )
}
