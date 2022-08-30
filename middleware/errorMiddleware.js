const errorHandler = (err, req, res, next) => {
  const status = res.status ? res.status : 500
  res.status(status)
  res.json({
    message: err.message,
    stack: process.env.Node_ENV === "production" ? null : err.stack,
  })
}

module.exports = { errorHandler }
