const express = require('express');
const router = express.Router();

//auth routes
router.post('/teacher/signup', (req,res)=> {
    res.send("<h1>auth</h1>");
});
router.post('/student/signup', (req,res)=> {
    res.send("<h1>auth</h1>");
});
router.post('/login', (req,res)=> {
    res.send("<h1>auth</h1>");
});

module.exports = router;