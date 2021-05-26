const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignup);
router.get('/profile/:index', ctrl.users.renderProfile);
router.get('/login', ctrl.users.renderLogin);
router.get('/hotels', ctrl.users.renderHotels);
router.get('/parks', ctrl.users.renderParks);

router.post('/', ctrl.users.signup);

router.put('/profile/:index', ctrl.users.editProfile);

router.delete('/:index', ctrl.users.deleteUser);

module.exports = router;