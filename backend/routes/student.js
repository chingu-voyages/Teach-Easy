const express = require('express');
const router = express.Router();
const { getDash, updateDash } = require('../controllers/student')
//student routes
//student dashboard creation
//NOT NEEDED now, as we create the sceham at sign up and can use the PUT to update fields
// router.post('/dashboard/create', (req,res)=> {
//     res.send("<h1>student</h1>");
// });

//get student dashboard
router.get('/dashboard', getDash)

//student dashboard update
router.put('/dashboard/update', updateDash);


module.exports = router;