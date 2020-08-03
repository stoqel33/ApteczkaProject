const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  nickname: {
    type: String,
    required: true,
    max: 40,
  },
  birthDate: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
