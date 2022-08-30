//import section
const express = require("express")
const app = express()
const colors = require("colors")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

//DB connection
connectDB()

//import routes
const routerAuth = require("./routes/authRoutes")

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

//routes middleware
app.use("/api/auth", routerAuth)

//server listening
app.listen(PORT, () => console.log(`server Started on ${PORT}`))
