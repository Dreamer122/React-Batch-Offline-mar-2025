import React, { useState, useEffect } from 'react';
import { databases } from "../appwrite/Config";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import { Sidebar } from '../Components/Dashboard/Sidebar';
import { Outlet } from 'react-router';
import { Calendar, Mail, Clock } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/Slices/userSlice';
export const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    const { userInfo } = useSelector((state) => state.user);
    const [userData, setUserData] = useState();
    const dispatch=useDispatch()

    const getUserData = async () => {
        try {
            const res = await databases.listDocuments(
                import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_USER_COLLECTIONID,
                [Query.equal("userId", user.userId)]
            );
            setUserData(res.documents[0]);
            dispatch(setUserInfo(res.documents[0]))


        } catch (error) {
            console.log("error in getting user data", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex">
                <Sidebar />
                
                <div className="flex-1">
                    {/* Header with user info */}
                    <div className="bg-white shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 py-6">
                            <div className="flex items-center gap-6">
                                {userInfo?.profilePic? <img src={userInfo.profilePic} alt="profile" className='w-20 h-20 rounded-full' />:
                                <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">
                                        { userData?.name?.charAt(0).toUpperCase() || 'U'}
                                    </span>
                                </div>
}
                                
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        {userInfo?.name || 'Loading...'}
                                    </h1>
                                    
                                    <div className="mt-2 flex flex-wrap gap-4">
                                        <div className="flex items-center text-gray-600">
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>{userInfo?.email}</span>
                                        </div>
                                        
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>Member since:</span>
                                            <span className="ml-1 font-medium">
                                                {userInfo?.$createdAt && new Date(userInfo.$createdAt).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "long",
                                                    year: "numeric"
                                                })}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center text-gray-600">
                                            <Clock className="w-4 h-4 mr-2" />
                                            <span>Last active: {new Date().toLocaleTimeString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main content area */}
                    <div className="max-w-7xl mx-auto px-4 py-6 overflow-y-scroll" style={{height:"calc(100vh - 200px)"}}>
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};