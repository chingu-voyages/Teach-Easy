const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Student = new Schema({
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
                default: 'Student'
        },
        language: String,
        languageProficiency: String,
        goal: String,
});


module.exports = mongoose.model('Student', Student)