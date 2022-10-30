const express = require('express');
const router = express.Router();
const { getLessonDoc, getProfile, updateProfile, getDash } = require('../controllers/teacher')
//teacher routes

//GET: teacher search
router.get('/search', getLessonDoc);

//GET: teacher profile details
router.get('/profile/:id', getProfile)

//teacher schedule

router.post('/schedule', (req,res)=> {
    res.send("<h1>teacher</h1>");
});
//teacher profile creation
//Perhaps the post isn't necessary. We can create the profile with the basic info.
// All additional info can be done in a put request i.e. the /profile/update route
// router.post('/profile/create', (req,res)=> {
//     res.send("<h1>teacher</h1>");
// });
//teacher profile update
router.put('/profile/update/:id',  updateProfile);

//teacher dash
router.get('/dashboard/:id', getDash)

//teacher dash update 
//I've set it as updateProfile as all the info for the dash is stored in the same model as the profile info
router.put('/dashboard/:id', updateProfile)

module.exports = router;