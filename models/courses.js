const mongoose = require('mongoose');

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
      teacher: {type: Schema.Types.ObjectId, ref: 'user'}
    }
  ],
  Student: [
    {
      student: {type: Schema.Types.ObjectId, ref: 'user'}
    }
  ]


});

module.exports = mongoose.model('courses', CourseSchema);