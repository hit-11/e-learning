const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
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
        course: {type: Schema.Types.ObjectId, ref: 'Courses'}
      }
    ],
    courseTaken: [
      {
        course: {type: Schema.Types.ObjectId, ref: 'Courses'}
      }
    ]

  }
);

module.exports = mongoose.model('user',UserSchema);