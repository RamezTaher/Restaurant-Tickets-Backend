const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    order: {
      type: String,
      required: [true, "Please select a product"],
      enum: ["Pizza", "Tacos", "Sushi", "Chicken Tenders"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the food"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "delivered"],
      default: "new",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
