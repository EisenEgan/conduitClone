var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: String,
  posts: {
    type: [Schema.ObjectId],
    ref: 'Post',
    default: []
  },
  favorites: {
    type: Schema.ObjectId,
    ref: 'Post',
    default: []
  },
  followers: {
    type: Schema.ObjectId,
    ref: 'User',
    default: []
  }
})

mongoose.model('User', userSchema)
