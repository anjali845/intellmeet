// src/utils/asyncHandler.js
// Wraps async route/controller functions and forwards any thrown errors
// to Express's error-handling middleware via next(error).
// This avoids repetitive try/catch blocks in every controller.

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
