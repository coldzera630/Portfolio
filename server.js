const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*' 
}));

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "YOUR_MONGODB_CONNECTION_STRING";

mongoose.connect(MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB."))
  .catch(err => console.error("MongoDB connection error:", err));

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  sentAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running!');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    
    const newMessage = new Message({ name, email, subject, message });
    
    
    await newMessage.save();
    
    
    res.status(201).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Error saving message:", error);
    
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
