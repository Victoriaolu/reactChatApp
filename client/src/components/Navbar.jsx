import react from 'react';
import logo from '../Pasted image.png';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='img' />
      </div>
      <div className='formhold'>
        <form className='search'>
          <input type='text' className='searchform' placeholder='search'></input>
          <button type='submit' className='submit'>Search</button>
        </form>
      </div>
      <div className='link'>
          <div className='homelink'>
            <Link to='/' className='link1'>Home</Link>
          </div>
          <div className='homelink'>
            <Link to='/login' className='link2'>Login</Link>
          </div>
          <div className='homelink'>
            <Link to='/register' className='link3'>Register</Link>
          </div>
          <div className='homelink'>
             <Link to='/profile'className='link4'>Profile</Link>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
