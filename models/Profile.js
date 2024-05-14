const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    photo: {
        type: String,
        default: 'default.jpg',
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
