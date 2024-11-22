import React from 'react';
import logout from '../logout.png';
import LogOut from './logOut';


const NavBar = () => {
  const { logoutfxn } = LogOut()
  const handleLogout = () => {
    logoutfxn();
    window.location.href='/login';
  };
  
  return(
    <div>
     <div className='navbar2'>
       <div className='imgcontx'>
          <div className='navbuttom'>
            <div className='logoutpic'>
            </div>
         </div>
          <div className='navbuttom'>
          <buttom onClick={handleLogout} className='iconbuttom'>
            <img src={logout} alt='img' aria-label='logout' className='logoutpics' />
          </buttom>
          </div>
       </div>
    </div>
  </div>
  );
}

export default NavBar;
