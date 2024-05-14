const profileService = require('../services/profileService');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
 
const getUserProfile = async (req, res) => {
    try {
        const userProfile = await profileService.getUserProfile(req.user.userId);
        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllPublicProfiles = async (req, res) => {
    console.log(req)
    try {
        const publicUserProfiles = await profileService.getAllPublicProfiles();
        if(publicUserProfiles.length == 0 ){
            return res.status(200).json({message: "No public profile found"})
        }
        res.json(publicUserProfiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateUserProfile = async (req, res) => {
    try {
        
       const updatedProfile = await profileService.updateUserProfile(req.user.userId, req.body);
        res.json(updatedProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const toggleProfilePrivacy = async (req, res) => {
    try {
        const updatedProfile = await profileService.toggleProfilePrivacy(req.user.userId);
        res.json(updatedProfile);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUserProfile,
    getAllPublicProfiles,
    updateUserProfile,
    toggleProfilePrivacy,
};
