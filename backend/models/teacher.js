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
        },
        uploadedLessons: Array,
        meetingLinks: Array,
        nextLessonDate: Date,
        nextLessonAttendees: Array
});


module.exports = mongoose.model('Teacher', Teacher)