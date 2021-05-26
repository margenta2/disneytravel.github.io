const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.hotels.index);

module.exports = router;