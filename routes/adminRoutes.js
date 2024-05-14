/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Returns all users
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 *
 * /admin/users/{userId}/profile:
 *   get:
 *     summary: Get user profile by ID (admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Returns user profile
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 */

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
