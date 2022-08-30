const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get The Token
      token = req.headers.authorization.split(" ")[1]
      // Verify Token
      const decrypted = jwt.verify(token, process.env.TOKEN_KEY)
      // Get The User
      req.user = await User.findById(decrypted.id).select("-password")

      next()
    } catch (error) {
      return res.status(403).json("Invalid token")
    }
  }

  if (!token) {
    return res.status(401).json("No Token Provided")
  }
}

module.exports = { protect }
