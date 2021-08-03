const express = require('express');
const router = express.Router();
const {
  authenticate,
  multer,
  validateUsers: validate,
} = require('../middlewares');
const { users: ctrl } = require('../controllers');

router
  // @ GET /api/users/current
  .get('/current', authenticate, ctrl.current)

  // @ POST /api/users/signup
  .post('/signup', express.json(), validate.registerUser, ctrl.signup)

  // @ POST /api/users/login
  .post('/login', express.json(), validate.registerUser, ctrl.login)

  // @ POST /api/users/logout
  .post('/logout', authenticate, ctrl.logout)

  // @ PATCH /api/users/avatars
  .patch('/avatars', authenticate, multer, ctrl.updateAvatar);

module.exports = router;
