const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// rating sorted with the name of the student who rated it and a rating. All stored in arrays.
// Also this way there's not the ability to change a rating, but that is a feature we could improve or add later
// It could definitely be made more efficient, open to any suggests for improvements
const Lesson = new Schema({
    teacherId: String,
    title:{
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    lessonDescription: String,
    teacherName: {
        type: String
    },
    lessonDocumentID:{
        type: String,
        required: true,
        unique: true
    },
    lessonDocument:{
        type: String,
        required: true
    },
    tags:{
        type: Array,
        required: true,
    },
    language:{
        type: String,
        required: true
    },
    rating: {
        ratedBy: Array,
        rateGiven: Array
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

Lesson.index({ title: 'text', lessonDescription: 'text', language: 'text', tags: 'text' });
module.exports = mongoose.model('Lesson', Lesson)