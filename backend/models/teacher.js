const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = new Schema({
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true
        },
        image: String,
        googleId: String,
        role: { 
            type: String,
            default: 'Teacher'
        },
        language: String,
        aboutMe:{
            type: String,
            require: true
        },
        uploadedLessons: Array,
        meetingLinks: Array
});


module.exports = mongoose.model('User', User)