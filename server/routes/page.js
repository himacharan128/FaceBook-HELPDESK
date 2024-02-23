const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createPage, deletePage } = require('../controllers/pageController');

router.post('/', authMiddleware, createPage);
router.delete('/:pageId', authMiddleware, deletePage);

module.exports = router;
