const lessonDocInDB = require('../models/lesson');
const teacherDocInDB = require('../models/teacher');
const mongoose = require('mongoose');

//GET: search for lesson
const getLessonDoc = async (req,res) => {
    // Tags from req.query receives an array in url/search?tags=item1,item2... format, whilst word search can receive a string.
    // word search not set up yet
    // const {tags, wordSearch} = req.query;
    const tags = req.query.tags;
    try {
        const lessons = await lessonDocInDB.find({ tags : { $in : tags.split(',').map(elem=> elem) }});
        const arrayLength = lessons[0].rating.rateGiven.length;
        const averageRating = (lessons[0].rating.rateGiven.reduce((a,b)=> +a + +b))/arrayLength;
        //average rating is returned for frontend display only
        res.status(200).json({...lessons, averageRating: averageRating});
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
        const lesson = await lessonDocInDB.create({teacherId: id, title, image, teacherName, lessonDocument, tags, language});
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
} 

const bookLesson = async (req,res) => {
    const { id, teacherId } = req.body;
    try {
        const booking = await teacherDocInDB.findOneAndUpdate({ _id: teacherId});
        booking.nextLessonAttendees.push(id);
        await booking.save();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const rateLesson = async (req,res)=> {
    //search for lesson by its id
    const {teacherId, rating, studentId} = req.body;
    console.log(teacherId, rating, studentId)
    if(rating > 5 || rating <0) return res.status(400).json({error: "Not a valid rating"});
    try {
        const lesson = await lessonDocInDB.findOneAndUpdate({ teacherId: teacherId});
            if(!lesson.rating.ratedBy.includes(studentId)){
                lesson.rating.rateGiven.push(rating);
                lesson.rating.ratedBy.push(studentId);
                console.log
                await lesson.save();
                res.status(200).json(lesson);
            }
            else{
                res.status(400).json({error: "student has already rated this lesson"})
            }
    } catch (error) {
        
    }
} 

module.exports = {postLesson, getLessonDoc, bookLesson, rateLesson};