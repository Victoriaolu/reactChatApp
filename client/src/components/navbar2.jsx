import React from 'react';
import LogOut from './logOut';
import { CiLogout } from "react-icons/ci";

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
            <div className='logoutpics'>
               <p>pics</p>        
            </div>
         </div>
          <div className='navbuttom'>
          <div onClick={handleLogout} className='iconbuttom'>
            < CiLogout className='imgcontx' />
          </div>
          </div>
       </div>
    </div>
  </div>
  );
}

export default NavBar;
