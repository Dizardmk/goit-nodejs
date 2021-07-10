const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContact = require('./removeContact');
const updateContact = require('./updateContact');
const favoriteContact = require('./favoriteContact');

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  favoriteContact,
};
