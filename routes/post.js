const express = require('express')
const postController = require('../controllers/post');
const validator = require('../validator');
const Post = require('../models/post');

const router = express.Router()
router.get('/', postController.getPosts);
router.post("/post",validator.createValidator, postController.createPost);
// router.put('/put', postController.putPost);
router.delete('/:id', postController.deletePost);
router.put('/:id', postController.updatePost);

module.exports = router;


