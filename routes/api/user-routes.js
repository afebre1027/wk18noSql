const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/pizzas
router.route("/").get(getAllUser).post(createUser);

// /api/Users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post().delete();
module.exports = router;
