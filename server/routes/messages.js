const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Message = require('../models/Message');
const router = express.Router();

// Example protected route to fetch messages for the authenticated user
router.get('/messages', authMiddleware, async (req, res) => {
    try {
        const messages = await Message.find({ recipient: req.userId }).populate('sender', 'username profilePicture');
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve chat history between authenticated user and another user
router.get('/messages/:userId', authMiddleware, async (req, res) => {
    try {
        // Fetch messages where the authenticated user is either the sender or recipient
        const messages = await Message.find({
            $or: [
                { sender: req.userId, recipient: req.params.userId },
                { sender: req.params.userId, recipient: req.userId }
            ]
        }).populate('sender recipient', 'username profilePicture'); // Populate user data

        // Send the messages back to the client
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/messages', authMiddleware, async (req, res) => {
    const { recipient, content } = req.body;

    const message = new Message({
        sender: req.userId,
        recipient,
        content
    });

    try {
        await message.save();
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
