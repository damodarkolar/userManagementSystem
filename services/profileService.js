const Profile = require('../models/Profile');

const getUserProfile = async (userId) => {
    // Find user profile by user ID
    const userProfile = await Profile.findOne({ user: userId });
    if (!userProfile) {
        throw new Error('User profile not found');
    }

    return userProfile;
};

const getAllPublicProfiles = async () => {
    //Get all public User

    const publicUserProfiles = await Profile.find({ isPublic: true });

    return publicUserProfiles;
}

const updateUserProfile = async (userId, profileData) => {
    try {
        // Find user profile by user ID
        let userProfile = await Profile.findOne({ user: userId });

        if (!userProfile) {
            throw new Error('User profile not found');
        }

        // Update profile fields with provided data
        Object.keys(profileData).forEach(key => {
            userProfile[key] = profileData[key];
        });

        // Save the updated profile
        userProfile = await userProfile.save();

        return userProfile;
    } catch (error) {
        throw new Error('Failed to update user profile');
    }
};

const toggleProfilePrivacy = async (userId) => {
    try {
        // Find user profile by user ID
        let userProfile = await Profile.findOne({ user: userId });

        if (!userProfile) {
            throw new Error('User profile not found');
        }

        // Toggle the isPublic flag
        userProfile.isPublic = !userProfile.isPublic;

        // Save the updated profile
        userProfile = await userProfile.save();

        return userProfile;
    } catch (error) {
        throw new Error('Failed to toggle profile privacy');
    }
};

module.exports = {
    getUserProfile,
    getAllPublicProfiles,
    updateUserProfile,
    toggleProfilePrivacy,
};
