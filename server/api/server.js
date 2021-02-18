const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const eg001 = require("../eg001EmbeddedSigning");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/user-router");

const server = express();

server.get("/", (req, res) => {
  res.json({
    message: [
      "Welcome to the API",
      "This API is used so I can practice integrating DocuSign Node SDK into an existing project.",
    ],
  });
});

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

server.use("/auth", authRouter);
server.use("/api/users", usersRouter);

server.post("/eg001", eg001.createController);

module.exports = server;
