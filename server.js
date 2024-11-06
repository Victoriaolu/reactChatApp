// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://vicky1:Oluchi12@cluster0.z4wra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = socketIo(server);

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('User connected');

    // Listen for incoming messages
    socket.on('message', (message) => {
        console.log('Message:', message);
        // Broadcast the message to all connected clients
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', messageRoutes);

// Optional: Token blacklist for logout functionality

