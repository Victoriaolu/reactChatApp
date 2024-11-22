import React from 'react';
import Navbar from './Navbar';
import NavBar from './navbar2';
import { useState, useEffect } from 'react';



const Home = () => {
  // State for holding messages and current message
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Function that handles sending message
  
  useEffect(() => {});
  
  return (
        <div>
            <Navbar />
        <div className='bdysupport'>
            <NavBar />
             <div className='Online'>

             </div>
             <div className='messagediv'>
             <div className='Homebg'>
              <div  className='hdcont'>   
                <h2 className='hdtitle'>Welcome to the Chat Application</h2>
              </div>
              <div className='messagediv'>
                {messages.map((mes, index) => (
                  <div key={index} className='msgload'>
                  {mes.message}
                  </div>
                ))
             }
             <input 
              type='text'
              className='sendmsg'
              placeholder='Type a message'
              value={currentMessage} 
              onChange={(e) => {setCurrentMessage(e.target.value)}} />
              <button  className='sndbutton'> Send </button>
          </div>
        </div>
       <div><p className='cpytxt'>Copyright &copy Date</p></div>
      </div>
   </div>
   </div>
  );
}

export default Home;
