const signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

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
