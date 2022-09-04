const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")
const { getNotes } = require("../controllers/notesController")

route.router("/").get(protect, getNotes)
