import React from 'react';
import { account } from '../../appwrite/Config';
import { NavLinks } from '../../data/Navlinks';
import { NavLink, Link, useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout, setLoading } from '../../redux/Slices/authSlice';
import toast from 'react-hot-toast';
import {
  LogOut,
  LayoutDashboard,
  LogIn,
  UserPlus
} from 'lucide-react';

export const Navbar = () => {
  const { user, loggedin, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userlogout = async () => {
    try {
      dispatch(setLoading(true));
      await account.deleteSession('current');
      dispatch(logout());
      dispatch(setLoading(false));
      localStorage.removeItem('user');
      toast.success('Logout successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error occurred while logout:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <header className="w-full bg-green-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-200 hover:text-white transition">
          GreenBlog
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {NavLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? 'bg-green-700 text-white' : 'hover:bg-green-700 text-green-100'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="flex gap-3 items-center">
          {loggedin && (
            <Link
              to={`/dashboard/${user.userId}`}
              className="flex items-center gap-2 bg-green-400 text-green-900 hover:bg-green-500 transition px-4 py-2 rounded-lg text-sm font-semibold"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          )}
          {loggedin && (
            <button
              onClick={userlogout}
              className="flex items-center gap-2 bg-red-100 text-red-700 hover:bg-red-200 transition px-4 py-2 rounded-lg text-sm font-semibold"
              disabled={loading}
            >
              <LogOut size={18} />
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          )}
          {!loggedin && (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 bg-green-400 text-green-900 hover:bg-green-500 transition px-4 py-2 rounded-lg text-sm font-semibold"
              >
                <LogIn size={18} />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 bg-white text-green-900 hover:bg-green-100 transition px-4 py-2 rounded-lg text-sm font-semibold"
              >
                <UserPlus size={18} />
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
