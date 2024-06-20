const notFoundMiddleware = (req, res, next) => {
  console.log('Info: Not Found');
  res.status(404).send('Not Found');
};

module.exports = notFoundMiddleware;