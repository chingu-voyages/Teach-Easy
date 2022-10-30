const lessonDocInDB = require('../models/lesson');
const studentDocInDB = require('../models/student');
const mongoose = require('mongoose');

//POST: create student profile
const createStudentProfile = async (req,res)=>{
    const {firstName, lastName, image, language, email, role} = req.body;
    try {
        const profile = await studentDocInDB.create({
        firstName: firstName,
        lastName: lastName,
        image: image,
        language: language,
        role: role,
        email: email
        });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//GET: retrieve info for student dashboard
const getDash = async (req,res) => {
    const {id} = req.params;
    try {
        const dash = await studentDocInDB.find({ _id: id })
            .select({firstName: 1, lastName: 1, email: 1, role: 1, language: 1, image: 1, goal: 1, _id: 0, });
        res.status(200).json(dash);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//PUT: updates the student info.
const updateDash = async (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, image, language, goal, lessonsRated} = req.body;
    console.log('body', req.body, 'params', id)
    try {
        const profile = await studentDocInDB.findOneAndUpdate({ _id: id } , {
            firstName:firstName, 
            lastName:lastName,
            image:image,
            language:language,
            goal: goal,
            lessonsRated: lessonsRated
        });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { getDash, updateDash, createStudentProfile }