import React, { useState } from 'react';
import IndexNav from './indexNav';

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
          <IndexNav />
          <div className='bdysupport'>
          <div className='logindiv'>
          <form onSubmit={handleSubmit}>
              <h2 className='hdlogin'>Login</h2>
              <div className='formdivtxt'>
              <label for='loginuser' className='labeltxt'>Username</label>
              <input type="text" id='loginuser' name="username" placeholder="Email" onChange={handleChange} className='loginform' required />
              </div>
              <div className='formdivtxt'>
              <label for='loginpass' className='labeltxt'>Password</label>
              <input type="password" id='loginpass' name="password" placeholder="Password" onChange={handleChange} className='loginform' required />
              </div>
              <button type="submit" className='loginbutton'>Login</button>
          </form>
        <p className='cpytxt'> Please click on <a href='/register'>Register</a> to register</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
