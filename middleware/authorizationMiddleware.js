const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const isAuthorize = async (req, res, next) => {
    // Check if token is provided in headers
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Authorization token is missing' });
    }

    // Verify token and userId
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);
        const userId = decodedToken.userId;

        if(userId !=req.params.userId){
            return res.status(400).json({ error: "Invalid token or User" });
        } 

        req.user =  decodedToken
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
};


module.exports = {
    isAuthorize,
};
