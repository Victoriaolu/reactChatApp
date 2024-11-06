import React, { useState } from 'react';

const Registration = () => {
    const [formData, setFormData] = useState({ username: '', password: '', bio: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registered:', formData);
        // Here you would typically send data to backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <textarea name="bio" placeholder="Add a short bio..." onChange={handleChange}></textarea>
            <button type="submit">Register</button>
        </form>
    );
};

export default Registration;
