const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Register and get all users
router
  .route("/")
  .post(registerUser) // POST /api/user → Register
  .get(protect, allUsers); // GET /api/user → Search users (protected)

// Login route
router.post("/login", authUser); // POST /api/user/login → Login

module.exports = router;
