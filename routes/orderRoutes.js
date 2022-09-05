const express = require("express")
const router = express.Router()

const {
  getOrders,
  getSignleOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController")

const { protect } = require("../middleware/authMiddleware")

const notesRouter = require("./notesRoutes")

router.use("/:orderId/notes", notesRouter)

router.route("/").get(protect, getOrders).post(protect, createOrder)

router
  .route("/:id")
  .get(protect, getSignleOrder)
  .delete(protect, deleteOrder)
  .put(protect, updateOrder)

module.exports = router
