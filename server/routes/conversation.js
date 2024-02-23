const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getConversations, replyToMessage } = require('../controllers/conversationController');

router.get('/', authMiddleware, getConversations);
router.post('/reply', authMiddleware, replyToMessage);

module.exports = router;
