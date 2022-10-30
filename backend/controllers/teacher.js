const lessonDocInDB = require('../models/lesson');
const teacherDocInDB = require('../models/teacher')
const mongoose = require('mongoose');
const teacher = require('../models/teacher');

//Get: search lesson Docs
const getLessonDoc = async (req,res) => {
    // Tags from req.query receives an array in url/search?tags=item1,item2... format, whilst word search can receive a string.
    // word search not set up yet
    // const {tags, wordSearch} = req.query;
    const tags = req.query.tags;
    try {
        const lessons = await lessonDocInDB.find({ tags : { $in : tags.split(',').map(elem=> elem) }})
        console.log('found', lessons)
        res.status(200).json(lessons)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

//GET: teacher profile details
const getProfile = async (req,res) => {
    const id = req.params
    try {
        const profile = await teacherDocInDB.find({ id: id})
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = { getLessonDoc, getProfile }