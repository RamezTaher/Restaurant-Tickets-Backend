const signUpUser = (req, res) => {
  res.send("Sign up")
}

const signInUser = (req, res) => {
  res.send("Sign in")
}

module.exports = {
  signInUser,
  signUpUser,
}
