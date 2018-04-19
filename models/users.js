const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      default: ''
      //required: true
    },
    password:
      {
        type: String
      },
    profile: {
        name: {type:  String},
        picture: {type: String}
    },
    courseTeach: [
      {
        course: {type: mongoose.Schema.Types.ObjectId, ref: 'Courses'}
      }
    ],
    courseTaken: [
      {
        course: {type: mongoose.Schema.Types.ObjectId, ref: 'Courses'}
      }
    ]

  }
);
const user = mongoose.model('user',UserSchema);
module.exports = user;