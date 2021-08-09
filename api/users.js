const express = require('express');
const {
  authenticate,
  multer,
  validateUsers: validate,
} = require('../middlewares');
const { users: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/users/verify/:verifyToken
  .get('/verify/:verifyToken', ctrl.verifyToken)

  // @ GET /api/users/current
  .get('/current', authenticate, ctrl.current)

  // @ POST /api/users/verify
  .post('/verify', express.json(), validate.verifyUser, ctrl.verify)

  // @ POST /api/users/signup
  .post('/signup', express.json(), validate.registerUser, ctrl.signup)

  // @ POST /api/users/login
  .post('/login', express.json(), validate.registerUser, ctrl.login)

  // @ POST /api/users/logout
  .post('/logout', authenticate, ctrl.logout)

  // @ PATCH /api/users/avatars
  .patch('/avatars', multer, authenticate, ctrl.updateAvatar);
