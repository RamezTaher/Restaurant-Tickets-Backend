const express = require("express")
const router = express.Router()

const {
  signInUser,
  signUpUser,
  getMe,
} = require("../controllers/authController")

const { protect } = require("../middleware/authMiddleware")

router.post("/signup", signUpUser)
router.post("/signin", signInUser)
router.get("/me", protect, getMe)

module.exports = router
