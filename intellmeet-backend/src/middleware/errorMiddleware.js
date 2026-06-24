// src/middleware/errorMiddleware.js
// Centralized error handling for the application.
// - notFound: catches requests to undefined routes and forwards a 404 error.
// - errorHandler: final error-handling middleware that formats all errors
//   into a consistent JSON response shape.

/**
 * Handles requests to routes that don't exist (404).
 */
const notFound = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Centralized error handler. Any error passed to next(error) anywhere
 * in the app (sync or async, via asyncHandler) ends up here.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  // If a status code was already set (e.g. 404), use it; otherwise default to 500
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only expose stack trace in development for security reasons
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

module.exports = { notFound, errorHandler };
