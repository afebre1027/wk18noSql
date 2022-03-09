const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  getOneThought,
  updateThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/ userId
router.route("/").get(getAllThoughts);
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);
router.route("/:userId").post(addThought);

router.route("/:userId/:reactionId").post(addReaction).delete(deleteReaction);

module.exports = router;
