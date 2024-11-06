// routes/user.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User'); // Adjust path as necessary

const router = express.Router();

// Set up storage for uploaded files (profile pictures)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    },
});

const upload = multer({ storage });

// Route to get user bios by username
router.get('/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }, 'username bio profilePicture'); // Select only necessary fields

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send(user);
    } catch (err) {
        res.status(500).send({ error: 'Error retrieving user' });
    }
});

// Profile update route
router.put('/profile', upload.single('profilePicture'), async (req, res) => {
    const { username, bio } = req.body;
    const profilePicturePath = req.file ? req.file.path : null; // Get uploaded file path

    try {
        const user = await User.findOneAndUpdate(
            { username },
            {
                bio,
                profilePicture: profilePicturePath // Update profile picture if uploaded
            },
            { new: true } // Return the updated document
        );

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send({ message: 'Profile updated successfully', user });
    } catch (err) {
        res.status(500).send({ error: 'Error updating profile' });
    }
});

module.exports = router;
