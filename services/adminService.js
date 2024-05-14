const User = require('../models/User');
const Profile = require("../models/Profile");

const getAllUsers = async () => {
    const users = await Profile.find();
    return users;
};

const getUserProfileById = async (userId) => {
    
    const userProfile = await Profile.findOne({ user: userId });
    
    if (!userProfile) {
        throw new Error('User profile not found');
    }

    return userProfile;
};

module.exports = {
    getAllUsers,
    getUserProfileById,
};
