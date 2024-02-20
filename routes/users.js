var express = require('express');
var router = express.Router();
const User = require("../Models/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/attend', async (req, res) =>{
  const studentID = req.body.studentID;
  const courseID = req.body.courseID;

  console.log(studentID,courseID);
  const newUser = new User({studentID:studentID, courseID:courseID})
  const savedUser = await newUser.save();
  console.log(savedUser);
})

module.exports = router;
