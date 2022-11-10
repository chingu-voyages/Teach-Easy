const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Teacher = new Schema({
        firstName: String,
        lastName: String,
        loginID: {
            type: String,
            unique: true,
        },
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
        languageProficiency: String,
        aboutMe:{
            type: String,
        },
        uploadedLessons: Array,
        meetingLinks: Array,
        nextLessonDate: Date,
        nextLessonAttendees: Array,

});

Teacher.index({ firstName: 'text', lastName: 'text', email: 'text', language: 'text', aboutMe: 'text', nextLessonDate: 'date' });

module.exports = mongoose.model('Teacher', Teacher)