const express = require('express');
const { getPeriods, addPeriod } = require('../controllers/periodController');

const router = express.Router();
router.get('/', getPeriods);
router.post('/', addPeriod);

module.exports = router;
