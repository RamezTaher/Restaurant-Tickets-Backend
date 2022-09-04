const User = require("../models/userModel")
const Order = require("../models/orderModel")

const getOrders = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(401).json("User not founded")
    }

    const order = await Order.findById(req.params.id)
    if (!order) {
      res.status(404).json("Order not founded")
    }
    if (ticket.user.toString() !== req.user.id) {
      res.status(401).json("Not Authorized")
    }
    res.status(200).json(order)
  } catch (error) {
    return res.status(404).json(error)
  }
}

const getSignleOrder = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(401).json("User not founded")
    }

    const orders = await Order.find({ user: req.user.id })
    res.status(200).json(orders)
  } catch (error) {
    return res.status(404).json(error)
  }
}

const createOrder = async (req, res) => {
  try {
    const { order, description } = req.body

    if (!order || !description) {
      return res.status(400).json("Please add Product and description")
    }

    const user = await User.findById(req.user.id)
    console.log(req.user.id)
    if (!user) {
      return res.status(401).json("User not founded")
    }

    const orders = await Order.create({
      order,
      description,
      user: req.user.id,
      status: "new",
    })
    res.status(201).json(orders)
  } catch (error) {
    return res.status(404).json(error)
  }
}

module.exports = {
  getOrders,
  createOrder,
  getSignleOrder,
}
