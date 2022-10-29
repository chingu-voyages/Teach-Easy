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
const {postLesson} = require('../controllers/lesson')

//lesson routes
//lesson search
router.get('/search/', (req,res)=> {
    // Tags can receive an array, whilst word search can receive a string.
    const {tags, wordSearch} = req.query;
    res.send('<h1>Here it is</h1>')
});
//lesson uploads
router.post('/upload', postLesson);

//lesson booking
router.post('/booking', (req,res)=> {
    res.send("<h1>lesson</h1>");
});

module.exports = router;