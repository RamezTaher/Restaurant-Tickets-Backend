const express = require("express")
const router = express.Router()

const { protect } = require("../middleware/authMiddleware")

const { getOrders, createOrder } = require("../controllers/orderController")

router.route("/").get(protect, getOrders).post(protect, createOrder)

module.exports = router
