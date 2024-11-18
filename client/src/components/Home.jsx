import React from 'react';
import Navbar from './Navbar';
import NavBar from './navbar2';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');


const Home = () => {
  // State for holding messages and current message
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Function that handles sending message
  const sendMessage = () => {
    if (currentMessage) {
      socket.emit('message', currentMessage);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    // listen for incoming message
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  });
  
  return (
        <div>
            <Navbar />
        <div className='bdysupport'>
            <NavBar />
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
              <button onClick={sendMessage} className='sndbutton'> Send </button>
          </div>
        </div>
       <div><p className='cpytxt'>Copyright &copy Date</p></div>
      </div>
   </div>
   </div>
  );
}

export default Home;
