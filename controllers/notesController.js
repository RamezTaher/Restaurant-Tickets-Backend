const User = require("../models/userModel")
const Order = require("../models/orderModel")
const Notes = require("../models/notesModal")

const getNotes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(401).json("User not founded")
    }

    const order = await Order.findById(req.params.orderId)

    if (order.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error("User Not Authorized")
    }

    const notes = await Notes.find({ order: req.params.orderId })
    res.status(200).json(notes)
  } catch (error) {
    res.status(404).json(error)
  }
}

const addNote = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    if (!user) {
      return res.status(401).json("User not founded")
    }

    const order = await Order.findById(req.params.orderId)

    if (order.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error("User not Authorized")
    }

    const note = await Notes.create({
      text: req.body.text,
      isStaff: false,
      order: req.params.orderId,
      user: req.user.id,
    })
    res.status(200).json(note)
  } catch (error) {
    res.status(404).json(error)
  }
}

module.exports = {
  getNotes,
  addNote,
}
