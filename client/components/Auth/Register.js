// components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Add API call to register a new user
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, { email, password });

      console.log(response.data); // Handle response accordingly
      // You may want to navigate to the login page or take further actions
    } catch (error) {
      console.error('Register error:', error);
      // Handle registration error
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
