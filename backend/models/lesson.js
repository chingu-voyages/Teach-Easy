const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LessonSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    teacherName: {
        type: String
    },
    lessonDocument:{
        type: String,
        required: true,
    },
    tags:{
        type: Array,
        required: true,
    },
    language:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Lesson', LessonSchema)