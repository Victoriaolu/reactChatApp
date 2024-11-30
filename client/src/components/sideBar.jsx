import React from 'react';
import { useState } from 'react';
import FetchUsers from './fetchAllUsers';
import { useAuthContext } from './AuthContext';

const Sidebar = () => {
  const { select, setSelect} = useAuthContext()
  const { loading, allusers } =  FetchUsers();
  var selected;
  const users = Object.values(allusers).find((select) => {selected = true});
  console.log(selected);
  console.log(select)
  return (
    <div className='Online'>
      <div className='contdiv'>
       {allusers.map((user)=> (
         <div key={user._id} className='onlinecont'>
           <div className='onlineref' onClick={()=>setSelect(user)}>
              <div className='pichold'>
                <img src={'http://127.0.0.1:5000/' + user.profilePicture} className='imgholda' />
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
