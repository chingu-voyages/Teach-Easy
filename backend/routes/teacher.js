const express = require("express");
const router = express.Router();
const {
  getProfile,
  updateProfile,
  getDash,
} = require("../controllers/teacher");
const { getLessonDoc } = require("../controllers/lesson");
//teacher routes

//GET: teacher's search for a lesson
router.get("/search", getLessonDoc);

//GET: teacher profile details
router.get("/profile/:id", getProfile);

//teacher schedule
// I think this route is unnecessary as all the info for it: next lesson date and list of attendees
// are stored in the teacher model, if we want to add a specific schedule, we'll need to create a new Schema for it.
//There's no separate module for a schedule, so currently
// router.post('/schedule', (req,res)=> {
//     res.send("<h1>teacher</h1>");
// });

//teacher profile creation
//Perhaps the post isn't necessary. We can create the profile with the basic info.
// All additional info can be done in a put request i.e. the /profile/update route
// router.post('/profile/create', (req,res)=> {
//     res.send("<h1>teacher</h1>");
// });

//teacher profile update
router.put("/profile/update/:id", updateProfile);

//teacher dash
router.get("/dashboard", getDash);

//teacher dash update
//I've set it as updateProfile as all the info for the dash is stored in the same model as the profile info
router.put("/dashboard/:id", updateProfile);

module.exports = router;
