const express = require('express');
const {
  authenticate,
  asyncWrapper,
  multer,
  validateUsers: validate,
} = require('../middlewares');
const { users: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/users/verify/:verifyToken
  .get('/verify/:verifyToken', asyncWrapper(ctrl.verifyToken))

  // @ GET /api/users/current
  .get('/current', authenticate, asyncWrapper(ctrl.current))

  // @ POST /api/users/verify
  .post(
    '/verify',
    express.json(),
    validate.verifyUser,
    asyncWrapper(ctrl.verify),
  )

  // @ POST /api/users/signup
  .post(
    '/signup',
    express.json(),
    validate.registerUser,
    asyncWrapper(ctrl.signup),
  )

  // @ POST /api/users/login
  .post(
    '/login',
    express.json(),
    validate.registerUser,
    asyncWrapper(ctrl.login),
  )

  // @ POST /api/users/logout
  .post('/logout', authenticate, asyncWrapper(ctrl.logout))

  // @ PATCH /api/users/avatars
  .patch('/avatars', multer, authenticate, asyncWrapper(ctrl.updateAvatar));
