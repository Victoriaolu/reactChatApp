const chatSchema = new mongoose.Schema({
    room: { type: String, required: true },
    messages: [
        {
            username: String,
            message: String,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Chat', chatSchema);
