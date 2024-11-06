const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' }, // Bio field for user profiles
    profilePicture: { type: String, default: '' } // Optional profile picture URL
});

module.exports = mongoose.model('User', UserSchema);
