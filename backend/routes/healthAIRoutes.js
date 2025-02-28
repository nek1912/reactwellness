const express = require('express');
const { getHealthAdvice } = require('../controllers/healthAIController');

const router = express.Router();

router.post('/ask', getHealthAdvice); // ✅ Correct route path

module.exports = router;
