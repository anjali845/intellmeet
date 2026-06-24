// src/routes/meetingRoutes.js
// Defines HTTP routes for Meeting resources and delegates logic to meetingController.
// `protect` is wired in now (currently a pass-through) so real JWT auth
// can be enabled later by just updating authMiddleware.js.

const express = require('express');
const router = express.Router();

const {
  getMeetings,
  getMeetingById,
  createMeeting,
} = require('../controllers/meetingController');
const { protect } = require('../middleware/authMiddleware');

/**
 * @route   GET /api/meetings
 * @desc    Get all meetings
 * @access  Public (placeholder) -> will become protected
 */
router.get('/', protect, getMeetings);

/**
 * @route   GET /api/meetings/:id
 * @desc    Get a single meeting by ID
 * @access  Public (placeholder) -> will become protected
 */
router.get('/:id', protect, getMeetingById);

/**
 * @route   POST /api/meetings
 * @desc    Create a new meeting
 * @access  Public (placeholder) -> will become protected
 */
router.post('/', protect, createMeeting);

module.exports = router;
