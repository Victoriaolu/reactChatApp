import React from 'react';
import logo from '../logochat.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='img' />
      </div>
      <div className='formhold'>
        <form className='search'>
          <input type='text' className='searchform' placeholder='Search'></input>
          <button type='submit' className='submit'>Search</button>
        </form>
      </div>
      <div className='link'>
          <div className='homelink'>
            <Link to='/home' className='link1'>Home</Link>
          </div>
          <div className='homelink'>
             <Link to='/profile'className='link4'>Profile</Link>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
