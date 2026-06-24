// src/routes/testRoutes.js
// Simple health-check / connectivity test route.

const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/test
 * @desc    Verify the backend server is up and responding
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend Working',
  });
});

module.exports = router;
