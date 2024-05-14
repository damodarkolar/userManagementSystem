/**
 * @swagger
 * /profile/{userId}:
 *   get:
 *     summary: Get user profile
 *     tags: [Profile]
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
 *
 * /profile/{userId}/getAllPublicProfiles:
 *   get:
 *     summary: Get all public user profiles
 *     tags: [Profile]
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
 *         description: Returns all public user profiles
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 *
 * /profile/{userId}/update:
 *   put:
 *     summary: Update user profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 *
 * /profile/{userId}/privacy:
 *   put:
 *     summary: Toggle profile privacy
 *     tags: [Profile]
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
 *         description: Profile privacy toggled successfully
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 */

// profileRoutes.js
const express = require('express');
const profileController = require('../controllers/profileController');
const authorizationMiddleware = require('../middleware/authorizationMiddleware');

const router = express.Router();

// Get user profile
router.get('/:userId', authorizationMiddleware.isAuthorize, profileController.getUserProfile);

// Get all public user profiles
router.get('/:userId/getAllPublicProfiles', authorizationMiddleware.isAuthorize, profileController.getAllPublicProfiles);
 
// Update user profile
router.put('/:userId/update', authorizationMiddleware.isAuthorize ,profileController.updateUserProfile);
 
// Toggle profile privacy
router.put('/:userId/privacy', authorizationMiddleware.isAuthorize, profileController.toggleProfilePrivacy);

module.exports = router;
