// BUILD YOUR SERVER HERE
const express = require("express");
const User = require("./users/model.js");

// instance of the express app
const server = express();

// global middleware
server.use(express.json);

////////// end points //////////

// [Get]
server.get("/", (req, res) => {
  res.json({ hello: "to my self" });
});

// [Get]:id
server.get("/api/users/:id", async (req, res) => {
  try {
    const users = await User.findById(id);
    if (users) {
      res.json(users);
    } else {
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

// [Get] all
server.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

// [Post] create

// [Put] update

// [Delete] remove

// expose server
module.exports = server; // EXPORT YOUR SERVER instead of {}
