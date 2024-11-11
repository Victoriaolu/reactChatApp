import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logged in:', formData);
        // Add logic to send data to backend here
    };

    return (
        <div>
          <Navbar />
          <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              <button type="submit">Login</button>
          </form>
        </div>
    );
};

export default Login;
