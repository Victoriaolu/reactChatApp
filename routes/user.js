// routes/user.js
const mongose = require('mongoose');
const bcrypt = require('bcrypt')
const Auth = require( '../middleware/auth');
const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User'); // Adjust path as necessary

const router = express.Router();

// Set up storage for uploaded files (profile pictures)
const storage = multer.diskStorage({
    destination: './uploads/profilePic',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.fieldname}-${path.extname(file.originalname)}`); // Append timestamp to filename
    },
});

const upload = multer({ storage: storage });

// Route to get user bios by username
router.get('/:username',  async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }); // Select only necessary fields

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.send(user);
    } catch (err) {
        res.status(500).send({ error: 'Error retrieving user' });
    }
});

// Profile update route
router.put('/profile/:id', Auth, upload.single('profilePicture'), async (req, res) => {
  if (!req.username) {
    res.status(404).json({ message: 'Not Authorized' })
  }  else {
    const { id } = req.params;
    const { username, password, bio } = req.body;
    const profilePicture = req.file ? req.file.path : req.body.profilePicture; // Get uploaded file path
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUpdate = { username, password: hashedPassword, bio, profilePicture, _id: id }

     if (!mongose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('User does not exist');
    }
     await User.findByIdAndUpdate(id, newUpdate, { new: true });
     res.send({ newUpdate, message: 'Profile updated successfully' });
    }
});

module.exports = router;
