// adminRoutes.js
const express = require('express');
const adminController = require('../controllers/adminController');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

// Get all users (admin only)
router.get('/users', adminMiddleware.isAdmin, adminController.getAllUsers);

// Get user profile by ID (admin only)
router.get('/users/:userId/profile', adminMiddleware.isAdmin, adminController.getUserProfileById);

module.exports = router;
