const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    studentID: {
        type: String,
    },
    courseID: {
        type: String,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;