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
server.post("/api/users", async (req, res) => {
  const users = req.body;

  if (!users.name || !users.bio) {
    res.status(400).json({ message: "user name and bio required" });
  } else {
    try {
      const newUser = await User.insert(users);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
});

// [Put] update

// [Delete] remove

// expose server
module.exports = server; // EXPORT YOUR SERVER instead of {}
