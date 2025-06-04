import React from 'react'
import { Navbar } from '../Components/common/Navbar'
import {Outlet} from "react-router"
import { Footer } from '../Components/common/Footer'
export const Layout = () => {
  return (
    <>
  <Navbar/>
  <Outlet/>
  <Footer/>
    </>
  )
}
