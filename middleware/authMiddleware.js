const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const isAuthenticated = async (req, res, next) => {
    // Check if token is provided in headers
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Verify token and extract userId
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);
        const userId = decodedToken.userId;

        // Find user by userId
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Attach user object to request for further processing
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};


module.exports = {
    isAuthenticated,
};
