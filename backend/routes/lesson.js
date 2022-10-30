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
const {postLesson, getLessonDoc, bookLesson} = require('../controllers/lesson')

//lesson routes
//lesson search
router.get('/search/', getLessonDoc);
//lesson uploads
router.post('/upload/:id', postLesson);

//lesson booking => updates teacher form: nextLessonAttendees.
router.put('/booking:id', bookLesson);

module.exports = router;