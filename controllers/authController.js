const bcrypt = require("bcryptjs")
const User = require("../models/userModel")

const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(422).json("Email already exist")
    }

    const salt = await bcrypt.genSalt(10)
    const hanshedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hanshedPassword,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    }

    res.send("Sign up")
  } catch (err) {
    return res.status(500).json(err)
  }
}

const signInUser = (req, res) => {
  res.send("Sign in")
}

module.exports = {
  signInUser,
  signUpUser,
}
