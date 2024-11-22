const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String,  default: '' }, // Bio field for user profiles
    profilePicture: { type: String, required: false, default: '' }, // Optional profile picture URL
    id: { type: String  }
},
{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
