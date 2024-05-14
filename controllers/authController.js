const authService = require('../services/authService');

const registerUser = async (req, res) => {
    try {
        const newUser = await authService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    console.log(req.body)
    try {
        const { email, password } = req.body;
        const {token, userId} = await authService.loginUser(email, password); 
        res.json({ token, userId });
    } catch (error) {
        res.status(401).json({ error: error.message }); 
    }
};


const logoutUser = async (req, res) => {
    try {
        // Call the logoutUser function from authService
        await authService.logoutUser(req.user._id);
        res.json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
};
