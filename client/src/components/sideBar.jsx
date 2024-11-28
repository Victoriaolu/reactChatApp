import React from 'react';
import { useState } from 'react';
import FetchUsers from './fetchAllUsers';


const Sidebar = () => {

const { loading, allusers } =  FetchUsers();;

  return (
    <div className='Online'>
      <div className='contdiv'>
        {allusers.map((user) => (
        <div key={user._id} className='onlinecont'>
           <div className='onlineref'>
              <div className='pichold'>
                <img src={"http://localhost:5000/" + user.profilePicture} className='imgholda' alt='img' />
              </div>
              <div className='Userdisp'>
                {user.username} 
              </div>
           </div>
            <div className='divider'></div>
         </div>
       ))
       }
       {loading ? <div className='loader'></div> : null}
      </div>
    </div>
  );
};

export default Sidebar;
