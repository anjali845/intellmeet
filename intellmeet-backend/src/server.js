// src/server.js
// Application entry point.
// Responsible for: loading environment variables, connecting to MongoDB,
// and starting the HTTP server. Uses Node's built-in http module to wrap
// the Express app so that Socket.io can be attached to the same server
// later without restructuring this file.

const dotenv = require('dotenv');

// Load environment variables from .env before anything else runs
dotenv.config();

const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Wrap the Express app in an HTTP server instance.
// This is intentional: Socket.io requires access to the raw HTTP server,
// so creating it here now means we won't need to refactor server.js later.
const server = http.createServer(app);

// -----------------------------------------------------------------------
// Future Socket.io integration:
// -----------------------------------------------------------------------
// const { Server } = require('socket.io');
// const initSockets = require('./sockets');
// const io = new Server(server, {
//   cors: { origin: process.env.CLIENT_URL || '*' },
// });
// initSockets(io);

/**
 * Starts the server only after a successful database connection,
 * preventing the app from accepting requests before it's ready.
 */
const startServer = async () => {
  try {
    await connectDB();

    server.listen(PORT, () => {
      console.log(`IntellMeet backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();

// Gracefully handle unhandled promise rejections instead of crashing silently
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = server;
