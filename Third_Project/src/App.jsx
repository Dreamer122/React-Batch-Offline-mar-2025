import {createBrowserRouter, RouterProvider} from "react-router"
import { Home } from "./Pages/Home"
import { Blog } from "./Pages/Blog"
import { About } from "./Pages/About"
import { Errorpage } from "./Pages/Errorpage"
import { Dynamicroutes } from "./Pages/Dynamicroutes"
import Layout from "./Pages/Layout"
function App(){

  let router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      errorElement:<Errorpage/>,
      children:[
        {
          index:true,
          path:"",
          element:<Home/>,
          errorElement:<Errorpage/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>,
          children:[
            {
              path:"",
              element:<h1>Blog Home</h1>
            },
            {
              path:"blog1",
              element:<h2>blog 1</h2>
            },
            {
              path:"blog2",
              element:<h2>blog 2</h2>
            }
          ]
        },
        {
          path:"/product/:id",
          element:<Dynamicroutes/>
        }
      ]
    },
   

  ])

  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App