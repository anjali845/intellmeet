// src/app.js
// Configures the Express application: global middleware, route mounting,
// and error handling. Does NOT start the server or connect to the DB —
// that responsibility belongs to server.js, keeping this file testable
// and reusable (e.g. for integration tests with supertest).

const express = require('express');
const cors = require('cors');

const testRoutes = require('./routes/testRoutes');
const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// -----------------------------------------------------------------------
// Global Middleware
// -----------------------------------------------------------------------

// Enable CORS. CLIENT_URL can be set in .env to restrict to a specific
// frontend origin; defaults to allowing all origins in development.
const corsOptions = {
  origin: process.env.CLIENT_URL || '*',
  credentials: true,
};
app.use(cors(corsOptions));

// Parse incoming JSON and urlencoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lightweight request logger (useful during development)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// -----------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------

// Root route - simple sanity check that the API is reachable
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the IntellMeet API',
  });
});

app.use('/api/test', testRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meetings', meetingRoutes);

// -----------------------------------------------------------------------
// Error Handling (must be registered last)
// -----------------------------------------------------------------------
app.use(notFound);
app.use(errorHandler);

module.exports = app;
