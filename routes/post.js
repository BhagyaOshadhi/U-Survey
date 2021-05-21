const express = require('express')
const postController = require('../controllers/post');
const validator = require('../validator');
const post = require('../models/post');

const router = express.Router()
router.get('/', postController.getPosts);
router.post("/post",validator.createValidator, postController.createPost);

module.exports = router;


