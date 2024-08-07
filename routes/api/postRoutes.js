// routes/api/postRoutes.js
const router = require('express').Router();
const postController = require('../../controllers/postController');

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

module.exports = router;