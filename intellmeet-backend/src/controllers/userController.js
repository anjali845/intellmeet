// src/controllers/userController.js
// Controller layer for User-related routes.
// Currently contains placeholder logic; real DB-backed logic (using the
// User model) can be added here later without changing route definitions.

const asyncHandler = require('../utils/asyncHandler');
// const User = require('../models/User'); // Uncomment when implementing real DB logic

/**
 * @desc    Get all users (placeholder)
 * @route   GET /api/users
 * @access  Public (will become protected once auth is implemented)
 */
const getUsers = asyncHandler(async (req, res) => {
  // TODO: Replace placeholder with real DB query, e.g.:
  // const users = await User.find();
  // return res.status(200).json({ success: true, data: users });

  res.status(200).json({
    success: true,
    message: 'Users API Working',
  });
});

/**
 * @desc    Get single user by ID (placeholder, ready for future use)
 * @route   GET /api/users/:id
 * @access  Public (will become protected once auth is implemented)
 */
const getUserById = asyncHandler(async (req, res) => {
  // TODO: Replace placeholder with real DB query, e.g.:
  // const user = await User.findById(req.params.id);
  // if (!user) {
  //   res.status(404);
  //   throw new Error('User not found');
  // }
  // return res.status(200).json({ success: true, data: user });

  res.status(200).json({
    success: true,
    message: `User detail placeholder for ID: ${req.params.id}`,
  });
});

/**
 * @desc    Create a new user (placeholder, ready for future use)
 * @route   POST /api/users
 * @access  Public (will become protected once auth is implemented)
 */
const createUser = asyncHandler(async (req, res) => {
  // TODO: Replace placeholder with real DB logic, e.g.:
  // const { name, email } = req.body;
  // const user = await User.create({ name, email });
  // return res.status(201).json({ success: true, data: user });

  res.status(201).json({
    success: true,
    message: 'Create user placeholder - not yet implemented',
  });
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
