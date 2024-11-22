import mongoose from 'mongoose';

const conversatioSchema = new mongoose.Schema({
  participants: [
    {
      type:mongoose.Schema.Type.ObjectId,
      ref: "Use",
    }
  ],
  messages:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Message',
      default: [],
    }
  ]
},
{timestamps: true}
);

module.epxorts = mongoose.model("Conversation", conversationSchema);
