var mongoose = require('mongoose')
var Post = mongoose.model('Post')

module.exports.postsGetAll = function(req, res) {
  Post.find().exec(function(err, posts) {
    if (err) {
      console.log("Error")
      res.status(500).json(err)
    } else {
      console.log("Found posts", posts.length)
      res.json(posts)
    }
  })
}

var splitTags = function(input) {
  if (input && input.length > 0) {
    return input.split(',')
  } else {
    return []
  }
}

module.exports.postsAddOne = function(req, res) {
  Post.create({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    tags: splitTags(req.body.tags)
  }, function(err, post) {
    if (err) {
      console.log("Error creating post")
      res.status(400).json(err)
    } else {
      console.log("Post added")
      res.status(201).json(post)
    }
  })
}
