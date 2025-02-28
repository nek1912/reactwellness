const express = require('express');
const { getLeaderboard, updateLeaderboard } = require('../controllers/leaderboardController');

const router = express.Router();
router.get('/', getLeaderboard);
router.post('/', updateLeaderboard);

module.exports = router;
