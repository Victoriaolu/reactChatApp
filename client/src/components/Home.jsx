import React from 'react';
import Navbar from './Navbar';
import NavBar from './navbar2';
import Sidebar from './sideBar';
import { useState, useEffect } from 'react'; 
import { useAuthContext } from './AuthContext';

const Home = () => {
  const date =  new Date().getFullYear()
  const [messages, setMessages] = useState('');
  const { select, authUser } = useAuthContext()
  // State for holding messages and current message

  // Function that handles sending message
    
  return (
    <div>
      <Navbar />
        <div className='bdysupport'>
          <NavBar />
          <Sidebar />
             <div className='messagediv'>
               <div className='Homebg'>
                 <div  className='hdcont'>   
                    <h2 className='hdtitle'>{select.username}</h2>
                  </div>
                  <div className='msgediv'>
                    <spam className='msgload'>
                      <p className='msginput'></p>
                    </spam>
                  </div>
                  <div>
                    <input type='text' className='sendmsg'
                    placeholder='Type a message' value={messages} 
                    onChange={(e) => setMessages(e.target.value)}
                    />
                    <button  className='sndbutton'> Send </button>
                  </div>
                </div>
             <div><p className='cpytxt'>Copyright &copy; {date}</p></div>
           </div>
         </div>
       </div>
      );
  }

export default Home;
