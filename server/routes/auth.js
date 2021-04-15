const express = require('express');
const router = express.Router();

const auth_controller = require('../controller/authController');

//Login
router.get('/login', auth_controller.login_get);
router.post('/login', auth_controller.login_post);

module.exports = router;