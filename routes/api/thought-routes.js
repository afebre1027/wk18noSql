const router = require("express").Router();
const {
  addThought,
  removeThought,
  getAllThoughts,
  getOneThought,
  updateThought,
} = require("../../controllers/thought-controller");

// /api/thoughts/ userId
router.route("/").get(getAllThoughts);
router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(removeThought);
router.route("/:userId").post(addThought);

module.exports = router;
