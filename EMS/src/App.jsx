
import {BrowserRouter,Routes,Route} from "react-router"
import { Layout } from "./Pages/Layout";
import { Dashboard } from "./Pages/Dashboard";
import { AddEmp } from "./Pages/AddEmp";
import { Viewemp } from "./Pages/Viewemp";
import { Singleemployeedetails } from "./Pages/Singleemployeedetails";
import axios from "axios";
import { Updateemp } from "./Pages/Updateemp";
import { useState } from "react";


function App(){
    
    return (
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout/>} >
            <Route index element={<Dashboard />} />
            <Route path="addemployee" element={<AddEmp/>} />
            <Route path="employees" element={<Viewemp  />} />
            <Route path="viewemployee/:id" element={<Singleemployeedetails/>} />
            <Route path="updateemp/:id" element={<Updateemp/>} />
          </Route>
        </Routes>
        </BrowserRouter>

       
    );
}
export default App;