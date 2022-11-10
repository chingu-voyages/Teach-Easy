const lessonDocInDB = require("../models/lesson");
const studentDocInDB = require("../models/student");
const mongoose = require("mongoose");

//POST: create student profile
const createStudentProfile = async (req, res) => {
  console.log("createStudentProfile");
  const { firstName, lastName, image, language, email, role, loginID } =
    req.body;
  try {
    const profile = await studentDocInDB.create({
      loginID,
      firstName,
      lastName,
      image,
      language,
      role,
      email,
    });
    console.log("created Student Profile");
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error, error.message);
  }
};

//GET: retrieve info for student dashboard
const getDash = async (req, res) => {
  const { id } = req.query;
  console.log("student getDash, uid: ", id);
  try {
    const dash = await studentDocInDB.find({ loginID: id }).select({
      firstName: 1,
      lastName: 1,
      email: 1,
      role: 1,
      language: 1,
      image: 1,
      goal: 1,
      _id: 0,
      loginID: 1,
    });
    res.status(200).json(dash);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT: updates the student info.
const updateDash = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, image, language, goal, lessonsRated } = req.body;
  console.log("body", req.body, "params", id);
  try {
    const profile = await studentDocInDB.findOneAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        image,
        language,
        goal,
        lessonsRated,
      }
    );
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getDash, updateDash, createStudentProfile };
