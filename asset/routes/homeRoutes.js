// routes/homeRoutes.js
const router = require('express').Router();
const postController = require('../controllers/postController');

router.get('/', postController.renderHomePage);

module.exports = router;