import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Menu, X } from "lucide-react"; // You can use any icon lib or SVGs

import { account } from "../../Appwrite/Config";
const Navbar = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const {isLoggedIn,user} = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate=useNavigate()
  const handleLogout =async () => {
    try{

      await account.deleteSession("current")
      localStorage.removeItem("user")
       dispatch(logout());
       navigate("/")
       alert("logout successfully")
      }
      catch(error){
        console.log(error)
      }
     };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          MyBlog
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="bg-cyan-600 px-4 py-2 rounded">Login</Link>
              <Link to="/signup" className="bg-cyan-700 px-4 py-2 rounded">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard/" className="bg-cyan-600 px-4 py-2 rounded">Dashboard</Link>
              <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <ul className="space-y-2">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          </ul>
          <div className="space-y-2">
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={toggleMenu} className="block bg-cyan-600 px-4 py-2 rounded">Login</Link>
                <Link to="/signup" onClick={toggleMenu} className="block bg-cyan-700 px-4 py-2 rounded">Register</Link>
              </>
            ) : (
              <>
                <Link to={`/dashboard/${user.userId}`} onClick={toggleMenu} className="block bg-cyan-600 px-4 py-2 rounded">Dashboard</Link>
                <button onClick={() => { handleLogout(); toggleMenu(); }} className="w-full bg-red-600 px-4 py-2 rounded">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
