const express = require('express');

module.exports = (app) => {
  // Middleware
  app.use(express.json());
  // Additional middleware setup can go here
};