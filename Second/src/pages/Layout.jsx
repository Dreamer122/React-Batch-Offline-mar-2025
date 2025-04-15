import React, {lazy,Suspense ,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navigate } from 'react-router-dom';
// import  About  from "./About";
import { Contact } from "./Contact";
import { Header } from '../Components/Header';
import Footer from '../Components/Footer';
import { Blogs } from './Blogs';
import App from '../App';
import { Errorpage } from './Errorpage';
import { ProductDesc } from './ProductDesc';
import { titles } from '../Components/Data';
import { useLocation } from 'react-router-dom';

const About=lazy(()=>import("../pages/About"))
import { SignupForm } from './SignupForm';
import { Login } from './Login';

const DynamicTitles=()=>{
  const location=useLocation();
  console.log(location.pathname)

  useEffect(()=>{
    document.title=titles[location.pathname]
  },[location.pathname])

return null

}


export const Layout = () => {

  return (
    <>
    <BrowserRouter>
    <DynamicTitles/>
    <Header />

<Routes>
  <Route path="/" element={<App/>}></Route>
  

  <Route path="/about" element={<Suspense fallback={<h1>loading....</h1>}> <About/> </Suspense>}/>
 
  <Route path="/contact" element={<Contact/>} />
  <Route path="blog" element={<Blogs/>} >  
  {/* 
  /blog/womenFashion
  */}
    <Route  index element={<h1>Women Fashion blog</h1>}/>
    <Route path='MenFashion' element={<h1>Men Fashion blog</h1>}/>
    <Route path='KidsFashion' element={<h1>kids Fashion blog</h1>}/>

  </Route>
<Route path='/products/:id/:title' element={<ProductDesc/>}></Route>

<Route path='/signup' element={<SignupForm/>}/>
<Route path='/login' element={<Login/>}/>

  <Route path="/*" element={<Errorpage/>} />
  {/* <Route path="/*" element={<Navigate to={"/"}/>} /> */}
  

</Routes>
<Footer/>
</BrowserRouter>
    </>
  )
}
