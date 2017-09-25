var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new mongoose.Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String],
  favoritedUsers: {
    type: [Schema.ObjectId],
    ref: 'User',
    default: []
  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
})

mongoose.model('Post', postSchema)
