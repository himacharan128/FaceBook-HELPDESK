import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Add API call to register
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        name,
        email,
        password,
      });

      console.log(response.data); // Handle response accordingly
      // Redirect to login or any other page
      router.push('/login');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#004c94]">
      <div className="bg-white p-12 rounded-3xl">
        <h6 className="text-2xl text-center font-semibold">Create Account</h6>
        <form onSubmit={handleRegister} className="flex flex-col gap-6 pt-8">
          <div>
            <label htmlFor="name" className="font-semibold text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-96 border-2 border-gray-300 p-2 block rounded-md mt-1 tracking-wide text-base"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
          </div>
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
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center font-medium pt-4">
            Already have an account? <a href="/login" className="text-blue-800">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
