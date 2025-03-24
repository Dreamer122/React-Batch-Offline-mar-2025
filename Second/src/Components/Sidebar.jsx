import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <>
    <div>
        <ul>
            <li>
                <Link to={""}>Women Fashion</Link>
            </li>
            <li>
                <Link to={"MenFashion"}>Men Fashion</Link>
            </li>
            <li>
                <Link to={"KidsFashion"}>Kids Fashion</Link>
            </li>
        </ul>
    </div>
    </>
  )
}
