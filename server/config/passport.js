const User = require('../models/user')
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

passport.use('local', new localStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) return done(err);

        if (!user) {
            return done(null, false, { message: 'Incorrect username or password' });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) return done(err);

            if (result) {
                return done(null, user, { message: 'Login successful' });
            }
            else {
                return done(null, false, { messsage: 'Incorrect password' })
            }
        });
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findOne({_id: id}, (err, user) => {
        const userInformation = {
            username: user.username,
        };
        done(err, userInformation);
    });
});
