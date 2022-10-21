const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// rating sorted with the name of the user who rated it and a rating. So users can change their rating if they wish, it'll also mean users can't rate a lesson more than once.
// Could definitely be made more efficient, open to any suggests for improvements
const Lesson = new Schema({
    teacherId: String,
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
    rating: {
        ratedBy: Array,
        rateGiven: Array
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Lesson', Lesson)