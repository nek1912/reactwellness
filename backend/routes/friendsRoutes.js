const express = require('express');
const { getFriends, addFriend } = require('../controllers/friendsController');

const router = express.Router();
router.get('/', getFriends);
router.post('/', addFriend);

module.exports = router;
