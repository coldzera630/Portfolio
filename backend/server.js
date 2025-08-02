// /backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// A modern async function to connect to the DB and start the server
const startServer = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in the .env file. Please check your .env file.");
    }
    
    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log("MongoDB database connection established successfully ✅");

    // Import and use API routes AFTER the connection is successful
    const apiRouter = require('./routes/api');
    app.use('/api', apiRouter);

    // Start listening for requests
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
    process.exit(1); // Exit the application if the DB connection fails
  }
};

// Start the server
startServer();