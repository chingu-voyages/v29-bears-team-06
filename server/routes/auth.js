const express = require('express');
const router = express.Router();

const authController = require('../controller/authController');

// Login
router.post('/login', auth_controller.loginPost);

// Sign up
router.post('/signup', authController.signupPost);

module.exports = router;