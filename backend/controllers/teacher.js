const lessonDocInDB = require("../models/lesson");
const teacherDocInDB = require("../models/teacher");
const mongoose = require("mongoose");

//POST: Create a teacher profile;
const createTeacherProfile = async (req, res) => {
  const { firstName, lastName, image, role, language, email, loginID } =
    req.body;
  try {
    const profile = await teacherDocInDB.create({
      loginID,
      firstName,
      lastName,
      language,
      image,
      role,
      email,
    });
    console.log("created teacher profile");
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET: search lesson Docs => can be found in lesson controller

//GET: teacher profile details
const getProfile = async (req, res) => {
  const id = req.params;
  try {
    const profile = await teacherDocInDB.find({ id: id });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT: updates the teacher profile info.
const updateProfile = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    image,
    language,
    aboutMe,
    uploadedLessons,
    meetingLinks,
    nextLessonDate,
  } = req.body;
  console.log("body", req.body, "params", id);
  try {
    const profile = await teacherDocInDB.findOneAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        image,
        language,
        aboutMe,
        uploadedLessons,
        meetingLinks,
        nextLessonDate,
      }
    );
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//GET: dashboard information
const getDash = async (req, res) => {
  const { id } = req.query;
  console.log("teacher getDash, uid: ", id);
  try {
    const dash = await teacherDocInDB.find({ loginID: id }).select({
      nextLessonDate: 1,
      firstName: 1,
      lastName: 1,
      email: 1,
      role: 1,
      language: 1,
      image: 1,
      meetingLinks: 1,
      nextLessonDate: 1,
      nextLessonAttendees: 1,
      _id: 0,
      loginID: 1,
    });
    res.status(200).json(dash);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//TODO: PUT: when teacher wants to create a ìn event date/lesson
//PUT: Schedules a new lesson 
const scheduleLesson = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    lessonTitle,
    lessonDescription,
    lessonDate,
    lessonTime,
    lessonLanguage,
    lessonTimeZone
  } = req.body;
  console.log(id, lessonTitle, lessonDescription, lessonDate, lessonTime, lessonLanguage, lessonTimeZone);
  try {
    const profile = await teacherDocInDB.findOneAndUpdate({ loginID: id })
          profile.nextLesson.push({
            firstName,
            lastName,
            lessonTitle,
            lessonDescription,
            lessonDate,
            lessonTime,
            lessonLanguage,
            lessonTimeZone
          });
          profile.save()
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { getProfile, updateProfile, getDash, createTeacherProfile, scheduleLesson };
