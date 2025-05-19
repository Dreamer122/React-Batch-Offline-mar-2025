import {BrowserRouter,Routes,Route} from "react-router"
import { Layout } from "./Pages/Layout"
import { Login } from "./Pages/Login"
import { Signup } from "./Pages/Signup"
import { Home } from "./Pages/Home"

function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
    </Route>
  </Routes>
  </BrowserRouter>
  
  

  </>)
}
export default App