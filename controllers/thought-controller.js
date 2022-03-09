const { Thought, User } = require("../models");

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "no user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          return res.status(404).json({ message: "no thought with this id" });
        }
        // return User.findOneAndUpdate(
        //   { _id: params.userId },
        //   { $pull: { thoughts: params.thoughtId } },
        //   { new: true }
        // );
        res.json(deletedThought);
      // })
      // .then((dbUserData) => {
      //   if (!dbUserData) {
      //     res.status(404).json({ message: " no user fround with this id" });
      //     return;
      //   }
      //   res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  getAllThoughts(req, res) {
    Thought.find({})
      .then((allThoughts) => res.json(allThoughts))
      .catch((err) => res.json(err));
  },
  getOneThought({ params }, res) {
    console.log("one thought");
    Thought.findOne({ _id: params.thoughtId })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: " no user fround with this id" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.json(err));
  },
  updateThought({ params, body }, res) {
    console.log("update thought");
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
      .then((thoughtData) => {
        if (!thoughtData) {
          res.status(404).json({ message: " no user fround with this id" });
          return;
        }
        res.json(thoughtData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
