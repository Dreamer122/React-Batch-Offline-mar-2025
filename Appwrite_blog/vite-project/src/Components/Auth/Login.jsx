// src/components/Login.js
import React, { useState } from 'react';
import { account } from '../../Appwrite/Config';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';
import toast from 'react-hot-toast';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await account.createEmailPasswordSession(email, password);
      dispatch(setUser(response));
      // alert('Login successful!');
      toast.success(" Loginsuccessful")
    } catch (error) {
      console.error('Login error', error);
      toast.error('Login failed!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
