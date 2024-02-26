import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Add API call to login
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email,
        password,
      });

      console.log(response.data); // Handle response accordingly
      // Redirect to dashboard or any other page
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#004c94]">
      <div className="bg-white p-12 rounded-3xl">
        <h6 className="text-2xl text-center font-semibold">Login to your account</h6>
        <div className="flex flex-col gap-6 pt-8">
          <div>
            <label htmlFor="email" className="font-semibold text-base">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-96 border-2 border-gray-300 p-2 block rounded-md mt-1 tracking-wide text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="pb-8">
            <label htmlFor="password" className="font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-96 border-2 border-gray-300 p-2 block rounded-md mt-1 tracking-wide text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button
            className="bg-[#004f97] p-4 w-full text-white text-xl rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-center font-medium pt-4">
            New to MyApp? <a href="/register" className="text-blue-800">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
