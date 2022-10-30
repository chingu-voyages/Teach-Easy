const lessonDocInDB = require('../models/lesson');
const teacherDocInDB = require('../models/teacher');
const mongoose = require('mongoose');

// GET : search for lesson
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


//  POST: a new lesson
const postLesson = async(req,res)=> {
    //title, lessonDocument,tags and language are required
    //TODO => add userID
    const { id } = req.params;
    const {title, image, teacherName, lessonDocument, tags, language} = req.body;
    const emptyFields = [];
    if(!title){
        emptyFields.push('Title');
    }
    if(!lessonDocument){
        emptyFields.push('Lesson Document');
    }
    if(!tags){
        emptyFields.push('Tags');
    }
    if(!language){
        emptyFields.push('Language');
    }
    if(emptyFields.length> 0) {
        res.status(400).json({error: 'Please make sure all fields are filled', emptyFields});
    }
    try {
        console.log('title', title, 'image', image)
        const lesson = await lessonDocInDB.create({teacherId: id, title, image, teacherName, lessonDocument, tags, language});
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
} 

const bookLesson = async (req,res) => {
    const { id, teacherId } = req.params;
    try {
        const booking = await teacherDocInDB.findOneAndUpdate({ _id: teacherId});
        booking.nextLessonAttendees.push(id);
        await booking.save();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {postLesson, getLessonDoc, bookLesson};