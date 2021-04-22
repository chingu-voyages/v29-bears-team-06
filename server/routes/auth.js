const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

/**
 * TICKET ROUTES
 */
router.post("/login", authController.loginPost);

router.post("/signup", authController.signupPost);

router.get('/*', authController.invalidRoute);

module.exports = router;
