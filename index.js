// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const http = require('http');
const socketIo = require('socket.io');
const multer = require('multer');
const path = require('path');
const User = require('./models/User'); // Ensure this model is defined correctly
const authRoutes = require('./routes/auth'); // Ensure this route file exists
const userRoutes = require('./routes/user'); // User-related routes

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    },
});

const upload = multer({ storage });

// User Registration Route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).send({ error: 'Error registering user' });
    }
});

// Route to handle profile updates
app.post('/api/profile', upload.single('profilePicture'), async (req, res) => {
    const { username, bio } = req.body; // Assuming you want to update based on username
    const profilePicturePath = req.file ? req.file.path : null;

    try {
        const user = await User.findOneAndUpdate(
            { username },
            { bio, profilePicture: profilePicturePath },
            { new: true } // Return the updated document
        );

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send({ message: 'Profile updated successfully!', user });
    } catch (err) {
        res.status(500).send({ error: 'Error updating profile' });
    }
});

// Use authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Add user routes to handle bios and other user-related actions

// Create HTTP server and Socket.IO instance
const server = http.createServer(app);
const io = socketIo(server);

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb+srv://vicky1:Oluchi12@cluster0.z4wra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
       console.log('MongoDB connected');
   })
   .catch(err => {
       console.error('MongoDB connection error:', err);
   });

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
