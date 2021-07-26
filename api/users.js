const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const { current, signup, login, logout } = require('../controllers/users');

// @ GET /api/users/current
router.get('/current', authenticate, current);

// @ POST /api/users/signup
router.post('/signup', express.json(), signup);

// @ POST /api/users/login
router.post('/login', express.json(), login);

// @ POST /api/users/logout
router.post('/login', authenticate, logout);

module.exports = router;
