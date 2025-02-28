const express = require('express');
const { getHabits, addHabit, toggleHabit } = require('../controllers/habitController');

const router = express.Router();

router.get('/', getHabits);
router.post('/', addHabit);
router.put('/:id', toggleHabit);

module.exports = router;
