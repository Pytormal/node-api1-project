// BUILD YOUR SERVER HERE
const express = require("express");

const server = express();
server.use(express.json());

const userRouter = require("./users/users-router");

server.use("/api/users", userRouter);

server.use((err, req, res, next) => {
  server.get("/", (req, res) => {
    res.json({ api: "up" });
  });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
