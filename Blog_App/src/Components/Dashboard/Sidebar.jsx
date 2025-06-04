import React from 'react';
import { NavLink } from "react-router";
import { useParams } from "react-router";
import { LayoutDashboard, PenSquare, Files, Settings } from 'lucide-react';

export const Sidebar = () => {
    const { id } = useParams();
    const sidebarLinks = [
        { text: "Summary", path: "", icon: <LayoutDashboard className="w-5 h-5" /> },
        { text: "Create Blog", path: `/dashboard/${id}/createblog`, icon: <PenSquare className="w-5 h-5" /> },
        { text: "All Posts", path: `/dashboard/${id}/allposts`, icon: <Files className="w-5 h-5" /> },
        { text: "Settings", path: `/dashboard/${id}/settings`, icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="bg-gradient-to-b from-green-800 to-green-700 text-green-50 w-64  p-6 shadow-xl sticky left-0 top-0" style={{height:'calc(100vh - 80px)'}}>
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Dashboard</h2>
                <div className="h-1 w-16 bg-green-500 rounded"></div>
            </div>
            
            <nav>
                <ul className="space-y-2">
                    {sidebarLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => `
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                                    ${isActive 
                                        ? 'bg-green-600 text-white shadow-md' 
                                        : 'text-green-100 hover:bg-green-600/50'}
                                `}
                            >
                                {link.icon}
                                <span className="font-medium">{link.text}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-auto pt-8 border-t border-green-600/50 mt-8">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                        <span className="text-lg font-semibold text-white">
                            {id?.charAt(0).toUpperCase() || 'U'}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">User Profile</p>
                        <p className="text-xs text-green-200">ID: {id || 'Not logged in'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};