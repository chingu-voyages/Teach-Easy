const express = require('express');
const router = express.Router();

//teacher routes
//teacher schedule
router.post('/schedule', (req,res)=> {
    res.send("<h1>teacher</h1>");
});
//teacher search
router.get('/search', (req,res)=> {
    res.send("<h1>teacher</h1>");
});
//get teacher profile details
router.get('/profile', (req,res)=>{
    res.send("<h1>Teacher profile</h1>")
})
//teacher profile creation
router.post('/profile/create', (req,res)=> {
    res.send("<h1>teacher</h1>");
});
//teacher profile update
router.put('/profile/update', (req,res)=> {
    res.send("<h1>teacher</h1>");
});
//teacher dash
router.get('/dashboard', (req,res)=>{
    res.send("<h1>teacher dash</h1>")
})
//teacher dash update 
router.put('/dashboard', (req,res)=>{
    res.send("<h1>Student dash</h1>")
})

module.exports = router;