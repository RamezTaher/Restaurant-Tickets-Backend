const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: "2 days" })
}

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
        token: generateToken(user._id),
      })
    }

    res.send("Sign up")
  } catch (err) {
    return res.status(500).json(err)
  }
}

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      return res.status(401).json("Wrong Password")
    }
  } catch (error) {
    res.status(401).json("Wrong Password")
  }
}

const getMe = async (req, res) => {
  try {
    const user = {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
    }
    res.status(200).json(user)
  } catch (error) {}
}

module.exports = {
  signInUser,
  signUpUser,
  getMe,
}
