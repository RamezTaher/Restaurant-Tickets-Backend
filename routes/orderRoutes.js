const express = require("express")
const router = express.Router()

const { protect } = require("../middleware/authMiddleware")

const {
  getOrders,
  getSignleOrder,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/orderController")

router.route("/").get(protect, getOrders).post(protect, createOrder)

router
  .route("/:id")
  .get(protect, getSignleOrder)
  .delete(protect, deleteOrder)
  .put(protect, updateOrder)

module.exports = router
