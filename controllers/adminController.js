const adminService = require('../services/adminService');

const getAllUsers = async (req, res) => {
    try {
        const users = await adminService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserProfileById = async (req, res) => {
    
    try {
       
        const userProfile = await adminService.getUserProfileById(req.params.userId);
        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserProfileById,
};
