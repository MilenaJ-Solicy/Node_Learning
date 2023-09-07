// routes/user-routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller'); // Import the user controller

// Define your REST API routes and associate them with controller methods
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
