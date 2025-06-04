
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router"
import Signup from './Components/Auth/Signup'
import Login from "./Components/Auth/Login"
import { Layout } from './Pages/Layout'
import {Toaster} from "react-hot-toast"
import { Home } from './Pages/Home'
import  Dashboard  from './Pages/Dashboard'
import CreateBlog from "./Components/DashBoard/CreateBlog"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Layout/>}>
  <Route  index element={<Home/>} />
    <Route path="login"  element={<Login/>} />
    <Route path="Signup"  element={<Signup/>} />
    <Route path="dashboard/:userid"  element={<Dashboard/>} >
    <Route path="createblog"  element={<CreateBlog/>} />

    </Route>
</Route>

    </Routes>
  
    </BrowserRouter>
<Toaster/>
    </>
  )
}

export default App
