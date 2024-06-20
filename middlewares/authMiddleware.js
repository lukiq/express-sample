const authMiddleware = (req, res, next) => {
  /**
	 * This is a sample middleware that logs a message to the console. You can do watever you want here
	 */
  console.log('Auth Middleware');
  next();
};

module.exports = authMiddleware;
