const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = new Schema({
        username: String,
        firstName: String,
        lastName: String,
        image: String,
        googleId: String,
        secret: String,
        role: { 
                type: String,
                enum: ['student', 'teacher']
        },
        language: String
});


module.exports = mongoose.model('User', User)