const lessonDocInDB = require('../models/lesson')

const postLesson = async(req,res)=> {
    //title, lessonDocument,tags and language are required
    //TODO => add userID
    const {title, image, teacherName, lessonDocument, tags, language} = req.body;
    const emptyFields = [];
    if(!title){
        emptyFields.push('Title')
    }
    if(!lessonDocument){
        emptyFields.push('Lesson Document')
    }
    if(!tags){
        emptyFields.push('Tags')
    }
    if(!language){
        emptyFields.push('Language')
    }
    if(emptyFields.length> 0) {
        res.status(400).json({error: 'Please make sure all Todos have Title and Description', emptyFields})
    }
    try {
        console.log('title', title, 'image', image)
        const lesson = await lessonDocInDB.create({title, image, teacherName, lessonDocument, tags, language})
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
} 

module.exports = {postLesson};