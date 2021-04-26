const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  if (!user) return null;

  const foundUser = {
    userId: user._id,
    username: user.username,
  };

  return jwt.sign(foundUser, process.env.JWTSECRET, {
    expiresIn: 86400, //24 hours
  });
};

const verifyToken = (req, res, next) => {
  console.log(req.headers);

  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.status(403);
  }
};

module.exports = { generateToken, verifyToken };
