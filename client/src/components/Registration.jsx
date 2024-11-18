import React, { useState } from 'react';
import IndexNav from './indexNav';

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
        <div>
        <IndexNav />
        <div className='bdysupport'>
        <div className='regdiv'>
        <form onSubmit={handleSubmit}>
            <h2 className='hdlogin'>Register</h2>
           <div className='formdivtxt'>
	    <label for='email' className='labeltxt'> Email</label>
            <input type='text' id='email' name='email' placeholder='Email' onChange={handleChange} className='loginform' required />
            </div>
            <div className='formdivtxt'>
            <label for='username' className='labeltxt'>Username</label>
            <input type="text" id='username' name="username" placeholder="Username" onChange={handleChange} className='loginform' required />
            </div>
            <div className='formdivtxt'>
            <label for='password 'className='labeltxt'>Password</label>
            <input type="password" id='password' name="password" placeholder="Password" onChange={handleChange} className='loginform' required />
            </div>
            <div className='formdivtxt'>
            <label for='bio' className='labeltxt'>Biography</label>
            <textarea name="bio" id='bio' className='textarea' placeholder="Add a short bio..." onChange={handleChange}></textarea>
            </div>
            <button type="submit" className='loginbutton'>Register</button>
        </form>
       </div>
      </div>
        </div>
    );
};

export default Registration;
