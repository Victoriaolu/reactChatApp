import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './App.css';

const socket = io('https://localhost:5000');

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile user={{ bio: "This is my bio." }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
