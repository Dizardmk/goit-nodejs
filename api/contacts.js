const express = require('express');
const {
  authenticate,
  asyncWrapper,
  validateContacts: validate,
} = require('../middlewares');
const { contacts: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/contacts
  .get('/', authenticate, asyncWrapper(ctrl.listContacts))

  // @ GET /api/contacts/:contactId
  .get('/:contactId', authenticate, asyncWrapper(ctrl.getContactById))

  // @ POST /api/contacts
  .post(
    '/',
    express.json(),
    validate.addContact,
    authenticate,
    asyncWrapper(ctrl.addContact),
  )

  // @ DELETE /api/contacts/:contactId
  .delete('/:contactId', authenticate, asyncWrapper(ctrl.removeContact))

  // @ PUT /api/contacts/:contactId
  .put(
    '/:contactId',
    express.json(),
    validate.updateContact,
    authenticate,
    asyncWrapper(ctrl.updateContact),
  )

  // @ PATCH /api/contacts/:contactId/favorite
  .patch(
    '/:contactId/favorite',
    express.json(),
    validate.favoriteContact,
    authenticate,
    asyncWrapper(ctrl.favoriteContact),
  );
