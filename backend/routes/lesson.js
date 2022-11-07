// 2 signup endpoints (teacher and student) POST
// 1 login endpoint POST
// search results GET
// updating profile info from dashboard PUT
// uploading PDFs POST
// uploading profile for teacher and students POST
// teacher availability POST
// lesson booking POST

const express = require('express');
const router = express.Router();
const {postLesson, getLessonDoc, bookLesson, rateLesson} = require('../controllers/lesson')
const multer = require("multer");

const Store = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: Store });
//lesson routes
//lesson search
router.get('/search/', getLessonDoc);

//lesson uploads
router.post('/upload/',upload.single('lessonDocument'), postLesson);

//lesson booking => updates teacher form: nextLessonAttendees.
router.put('/booking/', bookLesson);

//Give a rating to a lesson
router.put('/rate/', rateLesson);

module.exports = router;