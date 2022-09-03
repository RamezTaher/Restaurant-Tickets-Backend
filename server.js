//import section
const express = require("express")
const app = express()
const colors = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT || 5000
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

//DB connection
connectDB()

//import routes
const routerAuth = require("./routes/authRoutes")
const routerOrders = require("./routes/orderRoutes")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
app.use(cors())

//routes middleware
app.use("/api/auth", routerAuth)
app.use("/api/orders", routerOrders)

//server listening
app.listen(PORT, () => console.log(`server Started on ${PORT}`))
