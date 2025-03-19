import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import { Blogs } from './Blogs';
import App from '../App';
import { Errorpage } from './Errorpage';
import { ProductDesc } from './ProductDesc';
export const Layout = () => {
  return (
    <>
    <BrowserRouter>
    <Header />

<Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/blog" element={<Blogs/>} />
<Route path='/products/:id' element={<ProductDesc/>}></Route>

  {/* <Route path="/*" element={<Errorpage/>} /> */}
  <Route path="/*" element={<Navigate to={"/"}/>} />
  

</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}
