import {BrowserRouter,Routes,Route} from "react-router"
import { Layout } from "./Pages/Layout"
import { Login } from "./Pages/Login"
import { Signup } from "./Pages/Signup"
import { Home } from "./Pages/Home"
import {Toaster} from "react-hot-toast"
import { Dashboard } from "./Pages/Dashboard"
import { ProtectedRoutes } from "./Components/Protectedroutes/ProtectedRoutes"
import { Summary } from "./Components/Dashboard/Summary"
import { Allposts } from "./Components/Dashboard/Allposts"
import {CreateBlog} from "./Components/Dashboard/CreateBlog"
import {Settings} from "./Components/Dashboard/Settings"
import { Editblog } from "./Components/Dashboard/Editblog"
import { BlogView } from "./Pages/BlogView"

function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="dashboard/:id" element={<ProtectedRoutes> <Dashboard/></ProtectedRoutes> } >
    <Route path="" index element={<Summary/>}/>
    <Route path="allposts" element={<Allposts/>}/>
    <Route path="createblog" element={<CreateBlog/>}/>
    <Route path="settings" element={<Settings/>}/>
    <Route path="edit/:blogid" element={<Editblog/>}/>

    </Route>
    <Route path="/viewblogpost/:id" element={<BlogView/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  <Toaster/>
  
  

  </>)
}
export default App