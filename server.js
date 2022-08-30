const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
  res.send("Hello ")
})

app.listen(PORT, () => console.log(`server Started on ${PORT}`))
