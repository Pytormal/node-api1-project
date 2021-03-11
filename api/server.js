// BUILD YOUR SERVER HERE
const express = require("express");
const User = require("./users/model.js");

// instance of the express app
const server = express();

// global middleware
server.use(express.json());

////////// end points //////////

// [Get] Completed
server.get("/", (req, res) => {
  res.json({ hello: "to my self" });
});

// [Get]:id Completed
server.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
        res.status(404).json({message: 'bad id'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

// [Get] all Completed
server.get("/api/users", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

// [Post] create Completed
server.post("/api/users", async (req, res) => {
  const user = req.body;

  if (!user.name || !user.bio) {
    res.status(400).json({ message: "user name and bio required" });
  } else {
    try {
      const newUser = await User.insert(user);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
  }
});

// [Put] update Completed
server.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const updatedUser = await User.update(id, user);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(400).json({ error: error });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

// server.patch("/api/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const user = req.body;
//   try {
//     const updatedUser = await User.update(id, user);
//     if (updatedUser) {
//       res.json(updatedUser);
//     } else {
//       res.status(400).json({ error: error });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error });
//   }
// });

// // // for model.js // // //
// const modify = (id, changes) => {
//   const user = users.find((user) => user.id === id);
//   if (!user) return Promise.resolve(null);

//   const updatedUser = { ...changes, id };
//   users = users.map((d) => (d.id === id ? updatedUser : d));
//   return Promise.resolve(updatedUser);
// };

// [Delete] remove Completed
server.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.remove(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({message: 'bad id'})
        }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error });
    }
})

// expose server
module.exports = server; // EXPORT YOUR SERVER instead of {}
