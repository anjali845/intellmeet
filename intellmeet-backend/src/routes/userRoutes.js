// src/routes/userRoutes.js
// Defines HTTP routes for User resources and delegates logic to userController.
// `protect` is wired in now (currently a pass-through) so real JWT auth
// can be enabled later by just updating authMiddleware.js.

const express = require('express');
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Public (placeholder) -> will become protected
 */
router.get('/', protect, getUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Get a single user by ID
 * @access  Public (placeholder) -> will become protected
 */
router.get('/:id', protect, getUserById);

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public (placeholder) -> will become protected
 */
router.post('/', protect, createUser);

module.exports = router;
