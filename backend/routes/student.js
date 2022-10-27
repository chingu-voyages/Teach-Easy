const express = require('express');
const router = express.Router();

//student routes
//student dashboard creation
router.post('/dashboard/create', (req,res)=> {
    res.send("<h1>student</h1>");
});
//get student dashboard
router.get('/dashboard', (req,res)=>{
    res.send("<h1>Student dash</h1>")
})
//student dashboard update
router.put('/dashboard/update', (req,res)=> {
    res.send("<h1>student</h1>");
});

module.exports = router;