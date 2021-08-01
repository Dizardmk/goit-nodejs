const express = require('express');
const router = express.Router();
const { authenticate, validateContacts: validate } = require('../middlewares');
const { contacts: ctrl } = require('../controllers');

router
  // @ GET /api/contacts
  .get('/', authenticate, ctrl.listContacts)

  // @ GET /api/contacts/:contactId
  .get('/:contactId', authenticate, ctrl.getContactById)

  // @ POST /api/contacts
  .post('/', authenticate, express.json(), validate.addContact, ctrl.addContact)

  // @ DELETE /api/contacts/:contactId
  .delete('/:contactId', authenticate, ctrl.removeContact)

  // @ PUT /api/contacts/:contactId
  .put(
    '/:contactId',
    authenticate,
    express.json(),
    validate.updateContact,
    ctrl.updateContact,
  )

  // @ PATCH /api/contacts/:contactId/favorite
  .patch(
    '/:contactId/favorite',
    authenticate,
    express.json(),
    validate.favoriteContact,
    ctrl.favoriteContact,
  );

module.exports = router;
