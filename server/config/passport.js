const models = require("../models/index");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const passport = require("passport");

passport.use(
  "local",
  new LocalStrategy((username, password, done) => {
    models.User.findOne({ where: { username: username } })
      .then((user) => {
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) return done(err);

          if (result) {
            return done(null, user, { message: "Login successful" });
          } else {
            return done(null, false, {
              message: "Incorrect username or password",
            });
          }
        });
      })
      .catch((err) => {
        done(err);
      });
  })
);

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken("Authorization"),
  secretOrKey: process.env.JWTSECRET,
};

passport.use(
  "jwt",
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    return models.User.findOne({ id: jwtPayload.sub })
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  models.User.findOne({ _id: id })
    .then((user) => {
      const userInformation = {
        username: user.username,
      };
      done(null, userInformation);
    })
    .catch((err) => {
      done(err);
    });
});
