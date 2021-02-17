const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

const Users = require("../users/user-models");

const { jwtSecret } = require("./secret");
const { isValid } = require("../users/user-service");

router.post("/register", async (req, res) => {
  const credentials = req.body;
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 10;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    credentials.password = hash;
    Users.create(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
          stack: err.stack,
        });
      });
  } else {
    res.status(400).json({
      message: "Please provide a username and password",
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (isValid(req.body)) {
    Users.findBy({ username })
      .then(([user]) => {
        if (user && bcrypt.compare(password, user.password)) {
          const token = makeToken(user);
          res.status(200).json({
            token: token,
          });
        } else {
          res.status(401).json({
            message: "Invalid username or password",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
          stack: err.stack,
        });
      });
  } else {
    res.status(400).json({
      message: "Please provide a valid username and password",
    });
  }
});

const makeToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "2h",
  };
  return jwt.sign(payload, jwtSecret, options);
};

module.exports = router;
