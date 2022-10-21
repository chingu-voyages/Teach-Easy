const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Teacher = new Schema({
        firstName: String,
        lastName: String,
        googleId: String,
        email: {
            type: String,
            unique: true
        },
        image: String,
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
        meetingLinks: Array,
        nextLesson: Date
});


module.exports = mongoose.model('Teacher', Teacher)