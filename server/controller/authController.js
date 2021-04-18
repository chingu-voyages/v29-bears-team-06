const passport = require('passport');

exports.loginPost = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return res.send(err);

        if (!user) res.send('Incorrect username or password');

        req.logIn(user, (err) => {
            if (err) return next(err);
            res.send('Authentication successful');
        })(req, res, next);
    });
}