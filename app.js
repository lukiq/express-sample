const express = require('express');
const app = express();
const configureExpress = require('./config/expressConfig');
const userRoutes = require('./routes/userRoutes');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware');

// Configure Express
configureExpress(app);

// Routes
app.use('/api/users', userRoutes);

// Handle 404 - Not Found
app.use(notFoundMiddleware);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
