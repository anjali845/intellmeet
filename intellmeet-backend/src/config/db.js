// src/config/db.js
// Handles the MongoDB connection using Mongoose.
// Connection string and options are pulled from environment variables.

const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the URI defined in the environment variables.
 * Logs success or failure and exits the process on a failed connection,
 * since the app cannot function without a database connection.
 */
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Listen for connection errors after initial connection
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('MongoDB disconnected. Attempting to reconnect is handled by Mongoose driver.');
    });
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure since the app depends on DB connectivity
    process.exit(1);
  }
};

module.exports = connectDB;
