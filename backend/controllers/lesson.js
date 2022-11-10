const lessonDocInDB = require('../models/lesson');
const teacherDocInDB = require('../models/teacher');
const mongoose = require('mongoose');
const cloudinary = require('../config/cloudinaryConfig')

//GET: search for lesson
const getLessonDoc = async (req,res) => {
    // Tags from req.query receives an array in url/search?tags=item1,item2... format, whilst word search can receive a string.
    // word search not set up yet
    // const {tags, wordSearch} = req.query;
    const tags = req.query.tags;
    const wordSearch = req.query.searchData;
    try {
        if(tags){
            const tagAndWords = tags.split(',').join(' ') + ' ' + wordSearch;
            const lessons = await lessonDocInDB.find({ $text: {$search: tagAndWords} }, 
                { score: {$meta: "textScore"}}).sort({ score:  { $meta: "textScore"}});
                res.status(200).json({ lessons });
            }
        else{
            const lessons = await lessonDocInDB.find({ $text: {$search: wordSearch} }, 
                { score: {$meta: "textScore"}}).sort({ score:  { $meta: "textScore"}});
            res.status(200).json({ lessons });
            }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


//  POST: a new lesson
const postLesson = async(req,res)=> {
    //title, lessonDocument,tags and language are required
    //TODO => add userID
    // console.log(req.body)
    try {
    // const lessonDocument =  await req.file
    const result = await cloudinary.uploader.upload(req.file.path)
    console.log('cloud doc', result);
    console.log('file doc', req.file)
    // console.log('file doc path', req.file)
    const lessonDocumentID = result.public_id;
    const lessonDocument = result.secure_url;

    let {id, title, image, teacherName, lessonDescription, tags, language} = await req.body;
    tags = tags.split(' ');
    console.log('id', id, 'title', title, 'lessonDescription', lessonDescription, 'language', language, 'tags', tags, 'lessonDocID', lessonDocumentID, 'lessonDoc', lessonDocument, result.secure_url)
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

        const lesson = await lessonDocInDB.create({teacherId: id, title, image, lessonDescription, teacherName, lessonDocumentID, lessonDocument, tags, language});
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
        console.error('error rating lesson : ', error.message)
    }
} 

module.exports = {postLesson, getLessonDoc, bookLesson, rateLesson};