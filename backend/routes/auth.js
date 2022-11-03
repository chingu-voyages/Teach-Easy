const express = require('express');
const router = express.Router();
const { createTeacherProfile } = require('../controllers/teacher')
const { createStudentProfile } = require('../controllers/student')
//auth routes
//POST: Create a teacher profile
router.post('/teacher/signup', createTeacherProfile);

//POST: Create a Student profile
router.post('/student/signup', createStudentProfile);

//POST: Login a student/or teacher
//TODO: As part of user authentication
router.post('/login', (req,res)=> {
    console.log('request received')
    // const {loginID} = req.body; 
    // if(!loginID)
    console.log(req.body.loginID)
    res.send("<h1>authorised</h1>");
});

module.exports = router;