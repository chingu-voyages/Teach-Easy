const lessonDocInDB = require('../models/lesson');
const teacherDocInDB = require('../models/teacher')
const mongoose = require('mongoose');


//POST: Create a teacher profile;
const createTeacherProfile = async (req,res)=>{
    const {firstName, lastName, image, role, language, email} = req.body;
    try {
        const profile = await teacherDocInDB.create({
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

//GET: search lesson Docs
const getLessonDoc = async (req,res) => {
    // Tags from req.query receives an array in url/search?tags=item1,item2... format, whilst word search can receive a string.
    // word search not set up yet
    // const {tags, wordSearch} = req.query;
    const tags = req.query.tags;
    try {
        const lessons = await lessonDocInDB.find({ tags : { $in : tags.split(',').map(elem=> elem) }});
        console.log('found', lessons);
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//GET: teacher profile details
const getProfile = async (req,res) => {
    const id = req.params;
    try {
        const profile = await teacherDocInDB.find({ id: id});
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//PUT: updates the teacher profile info.
const updateProfile = async (req,res)=>{
    const {id} = req.params;
    const {firstName, lastName, image, language, aboutMe, uploadedLessons, meetingLinks, nextLessonDate} = req.body;
    console.log('body', req.body, 'params', id)
    try {
        const profile = await teacherDocInDB.findOneAndUpdate({ _id: id } , {
        firstName: firstName,
        lastName: lastName,
        image: image,
        language: language,
        aboutMe: aboutMe,
        uploadedLessons: uploadedLessons,
        meetingLinks: meetingLinks,
        nextLessonDate: nextLessonDate,
        });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
//GET: dashboard information
const getDash = async (req,res) => {
    const {id} = req.params;
    try {
        const dash = await teacherDocInDB.find({ _id: id })
            .select({nextLessonDate: 1, firstName: 1, lastName: 1, email: 1, role: 1, language: 1, image: 1, meetingLinks: 1, nextLessonDate: 1, nextLessonAttendees: 1, _id: 0, });
        res.status(200).json(dash);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



module.exports = { getLessonDoc, getProfile, updateProfile, getDash, createTeacherProfile }