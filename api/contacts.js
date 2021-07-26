const express = require('express');
const router = express.Router();
const {
  validateAddContact,
  validateUpdateContact,
  validateFavoriteContact,
} = require('../middlewares/validateContacts');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  favoriteContact,
} = require('../controllers/contacts');

// @ GET /api/contacts
router.get('/', listContacts);

// @ GET /api/contacts/:contactId
router.get('/:contactId', getContactById);

// @ POST /api/contacts
router.post('/', express.json(), validateAddContact, addContact);

// @ DELETE /api/contacts/:contactId
router.delete('/:contactId', removeContact);

// @ PUT /api/contacts/:contactId
router.put('/:contactId', express.json(), validateUpdateContact, updateContact);

// @ PATCH /api/contacts/:contactId/favorite
router.patch(
  '/:contactId/favorite',
  express.json(),
  validateFavoriteContact,
  favoriteContact,
);

module.exports = router;
