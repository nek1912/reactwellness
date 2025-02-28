const express = require('express');
const { getWaterData, updateWaterIntake } = require('../controllers/waterController');

const router = express.Router();

router.get('/', getWaterData);
router.post('/', updateWaterIntake);

module.exports = router;
