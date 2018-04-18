const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  wistiaId: {
    type: String,
    unique: true,
    required: true
  },
  NumberOfStudents: {
    type:  Number
  },
  Teacher: [
    {
      teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    }
  ],
  Student: [
    {
      student: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
    }
  ]


});
const courses = mongoose.model('courses', CourseSchema);
module.exports = courses;