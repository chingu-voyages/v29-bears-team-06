const models = require("../models/index");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { body, check, validationResult } = require("express-validator");
const { generateToken } = require("../utils/jwt");
require("../config/passport");

const BCRYPT_SALT_ROUNDS = 12;

exports.invalidRoute = (req, res, next) => {
  res.send("Invalid route");
};

exports.loginPost = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) return res.status(400).send(err);

    if (info !== undefined) console.log(info.message);

    if (!user) return res.status(400).send("Incorrect username or password");
    else {
      req.logIn(user, (err) => {
        if (err) return next(err);

        models.User.findOne({
          where: { username: user.username },
        }).then((user) => {
          const token = generateToken(user);

          res
            .status(200)
            .send({ auth: true, token, message: "Login Successful" });
        });
      });
    }
  })(req, res, next);
};

exports.signupPost = [
  //Validate credentials
  body("first_name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long")
    .isAlpha()
    .withMessage("First name must only contain alphabetical characters"),
  body("last_name")
    .trim()
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long")
    .isAlpha()
    .withMessage("Last name must only contain alphabetical characters"),
  body("username")
    .isEmail()
    .withMessage("Username must be valid email address")
    .custom((value) => {
      return models.User.findOne({
        where: {
          username: value,
        },
      }).then((user) => {
        if (user) {
          return Promise.reject("Username already exists");
        }
      });
    }),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
  check("confirm_password", "Passwords do not match")
    .exists()
    .custom((value, { req }) => value === req.body.password),

  // sanitize
  body("*").escape(),

  (req, res, next) => {
    // express-validator result
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // There are errors, send error message to client
      return res.status(400).json({ errors: errors.array() });
    } else {
      // No errors. create new user
      const { first_name, last_name, username, password } = req.body;

      //encrypt password and create user
      bcrypt.hash(password, BCRYPT_SALT_ROUNDS, (err, hash) => {
        if (err) return next(err);

        models.User.create({
          first_name: first_name,
          last_name: last_name,
          username: username,
          password: hash,
        });
      });

      return res.status(200).send("User created");
    }
  },
];
