const router = require("express").Router();
const User = require("./model.js");

// {Get All}
router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await User.find());
  } catch (err) {
    next(
      res
        .status(err, 500)
        .json({ message: "The users information could not be retrieved" })
    );
  }
});

//  {Get specific user }
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
       res
         .status(err, 404)
         .json({ message: "The user with the specified ID does not exist" });
    next(
      res
        .status(err, 500)
        .json({ message: "The user information could not be retrieved" })
    );
  }
});

//  {Post: create New User}
router.post("/", async (req, res, next) => {
  const { name, bio } = req.body;

  if (!name || !bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  } else {
    try {
      const user = await User.insert(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(
        res.status(500).json({
          message: "There was an error while saving the user to the database",
        })
      );
    }
  }
});

// {Put: Update a User}
router.put("/:id", async (req, res, next) => {

  const changes = req.body;
  const { id } = req.params;

  if (!changes.name || !changes.bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  } else {
    await User.update(id, changes)
      .then((updatedUser) => {
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res
            .status(404)
            .json({ message: `The user with the specified ID ${id} does not exist` });
        }
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "The user information could not be modified" });
      });
    next();
  }
});

// {Delete specific user}
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  User.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ message: "The user with the specified ID does not exist" + id });
      }
    })
    .catch(() => {
      res.status(500).json({message: "The user could not be removed" });
    });
  next();
});

module.exports = router;
