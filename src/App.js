import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

const socket = io('http://localhost:3000'); // Server URL

function App() {
  // State for storing messages and current message
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // Function to send a message
  const sendMessage = () => {
    if (currentMessage) {
      socket.emit('message', currentMessage);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile user={{ bio: "This is my bio." }} />} />
        </Routes>

        {/* Chat Interface */}
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
          <input
            type="text"
            placeholder="Type a message..."
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </Router>
  );
}

export default App;
