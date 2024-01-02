const chatGenmiController = require('../Controllers/chatGenmiController');
const router = require('express').Router();

router.post('/chat', chatGenmiController.chatController);
router.get('/getchat', chatGenmiController.getChatHistoryController);

module.exports = router;