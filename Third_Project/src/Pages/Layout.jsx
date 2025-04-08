import React from 'react'
import { NavLink ,Outlet} from 'react-router'
const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li> 
                    <NavLink to="/">
                    home

                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/about">
                    ABout

                    </NavLink>
                </li>
                <li> 
                    <NavLink to="/blog">
                    Blog

                    </NavLink>
                </li>

            </ul>
        </nav>

        <Outlet></Outlet>

        <footer>

            footer
        </footer>


    </div>
  )
}

export default Layout