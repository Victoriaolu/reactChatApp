// routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs'); // Use bcryptjs for consistency
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path as necessary

const router = express.Router();

// User Registration Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error registering user' });
    }
});

// User Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' }); // Use an environment variable for the secret in production

        res.json({ token, message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error logging in' });
    }
});

module.exports = router;
