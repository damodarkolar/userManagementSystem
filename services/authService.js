
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Profile = require('../models/Profile');
const config = require('../config/config');

const registerUser = async (userData) => {
   
    try {
        // Check for existing users
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            // throw new Error('User already exists');
            return {message : "User already exists"}
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        // Create new user
        const newUser = await User.create({
            email: userData.email,
            password: hashedPassword,
        });

        // Create profile for the new user
        const newProfile = await Profile.create({
            user: newUser._id,
            name: userData.name,
            photo: userData.photo,
            bio: userData.bio,
            phone: userData.phoneNumber,
            isPublic: false,
            isAdmin: false,
        });

        return newUser;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to register user');
    }
};

const loginUser = async (email, password) => {
    // Find user by email
    
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, { expiresIn: '1h' });

    return token;
};

const logoutUser = async (userId) => {

    const userProfile = await Profile.findOne({ user: userId });
    if (!userProfile) {
        throw new Error('User profile not found');
    }
    
    return { message: 'Logout successful' };
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};
