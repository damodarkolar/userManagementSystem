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
