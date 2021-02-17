const router = require("express").Router();

const Users = require("./user-models");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({
          message: `Could not find user with ID #${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const edits = req.body;

  Users.findById(id)
    .then((user) => {
      if (user) {
        Users.update(id, edits).then((updatedUser) => {
          res.status(201).json(updatedUser);
        });
      } else {
        res.status(404).json({
          message: `Could not find user with ID #${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then((user) => {
      if (user) {
        res.status(204).end();
      } else {
        res.status(404).json({
          message: `Could not find user with ID #${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        stack: err.stack,
      });
    });
});

module.exports = router;
