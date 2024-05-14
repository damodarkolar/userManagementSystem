require('dotenv').config();

module.exports = {
    // MongoDB configuration
    mongodb: {
        uri: process.env.MONGODB_URI,
    },
    
    
    // JWT secret key for token generation
    jwtSecret: process.env.JWT_SECRET,
    
};
