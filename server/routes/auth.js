const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

/**
 * AUTH ROUTES
 */
router.post("/login", authController.loginPost);

router.post("/signup", authController.signupPost);

router.get('/*', authController.invalidRoute);

module.exports = router;
