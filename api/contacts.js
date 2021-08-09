const express = require('express');
const { authenticate, validateContacts: validate } = require('../middlewares');
const { contacts: ctrl } = require('../controllers');

module.exports = express
  .Router()

  // @ GET /api/contacts
  .get('/', authenticate, ctrl.listContacts)

  // @ GET /api/contacts/:contactId
  .get('/:contactId', authenticate, ctrl.getContactById)

  // @ POST /api/contacts
  .post('/', express.json(), validate.addContact, authenticate, ctrl.addContact)

  // @ DELETE /api/contacts/:contactId
  .delete('/:contactId', authenticate, ctrl.removeContact)

  // @ PUT /api/contacts/:contactId
  .put(
    '/:contactId',
    express.json(),
    validate.updateContact,
    authenticate,
    ctrl.updateContact,
  )

  // @ PATCH /api/contacts/:contactId/favorite
  .patch(
    '/:contactId/favorite',
    express.json(),
    validate.favoriteContact,
    authenticate,
    ctrl.favoriteContact,
  );
