const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Order",
    },
    text: {
      type: String,
      required: [true, "Please enter some notes"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Note", noteSchema)
