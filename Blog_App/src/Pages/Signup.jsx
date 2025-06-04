import React from 'react';
import { useForm } from "react-hook-form";
import { account, databases } from '../appwrite/Config';
import { ID } from "appwrite";
import { useNavigate } from "react-router";
import { UserPlus, Mail, Lock, User } from 'lucide-react';

export const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    const signup = async (data, e) => {
        e.preventDefault();
        try {
            const user = await account.create(ID.unique(), data.email, data.password);
            console.log(user);
            const res = await databases.createDocument(
                import.meta.env.VITE_DATABASEID,
                import.meta.env.VITE_USER_COLLECTIONID,
                ID.unique(),
                {
                    email: data.email,
                    name: data.name,
                    userId: user.$id
                }
            );
            console.log("account created successfully", res);
            navigate("/login");
        } catch (error) {
            console.log("error occurred while signup", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                        <UserPlus className="h-6 w-6 text-green-600" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join our community and start creating amazing posts
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit(signup)}>
                    <div className="space-y-4">
                        <div className="relative">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register("name")}
                                    type="text"
                                    id="name"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register("email")}
                                    type="email"
                                    id="email"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    {...register("password")}
                                    type="password"
                                    id="password"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="text-center text-sm">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="font-medium text-green-600 hover:text-green-500">
                                Sign in
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};