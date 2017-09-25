var express = require('express')
var router = express.Router()

var ctrlPosts = require('../controllers/posts.controllers')
var ctrlUsers = require('../controllers/users.controllers')

router
  .route('/posts')
  .get(ctrlPosts.postsGetAll)
  .post(ctrlPosts.postsAddOne)
// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register)

router
  .route('/users/login')
  .post(ctrlUsers.login)

module.exports = router
