const express = require('express');
const router = express.Router();
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
router.post('/', express.json(), addContact);

// @ DELETE /api/contacts/:contactId
router.delete('/:contactId', removeContact);

// @ POST /api/contacts/:contactId
router.post('/:contactId', express.json(), updateContact);

// @ PATCH /api/contacts/:contactId/favorite
router.patch('/:contactId/favorite', express.json(), favoriteContact);

module.exports = router;
