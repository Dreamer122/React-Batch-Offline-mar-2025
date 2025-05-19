// src/components/Signup.jsx
import React, { useState } from 'react';
import { account, databases } from '../../Appwrite/Config';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';
import { ID } from 'appwrite';
import toast from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 1. Create Appwrite Auth user
      const user = await account.create('unique()', email, password, name);
      console.log("user after create account",user)
      // 2. Create session (login)
   const loginres=   await account.createEmailPasswordSession(email, password);
console.log("loginres",loginres)
      // 3. Save user data in your custom users collection
   const res=   await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
        ID.unique() ,// use auth user ID as document ID
        {
          userId: user.$id,
          email: email,
          name: name,
          // bio: '', // you can add more fields as needed
        }
      );
      console.log("res",res)

      // 4. Dispatch user to Redux store
      dispatch(setUser(user));

      toast.success('Signup successful!');
    } catch (err) {
      console.error('Signup error:', err);
     toast.error(err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
