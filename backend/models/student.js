const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Student = new Schema({
        firstName: String,
        lastName: String,
        googleId: String,
        email: {
                type: String,
                unique: true
        },
        image: String,
        secret: String,
        role: { 
                type: String,
                default: 'Student'
        },
        language: String,
        goal: String,
        lessonsRates: Array
});


module.exports = mongoose.model('Student', Student)