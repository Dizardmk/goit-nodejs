const { Contact } = require('../models');

// list contacts
const listContacts = () => Contact.find({});

// get contact by id
const getContactById = contactId => Contact.findById(contactId);

// add contact
const addContact = body => Contact.create(body);

// remove contact
const removeContact = contactId => Contact.findByIdAndDelete(contactId);

// update contact
const updateContact = (contactId, body) =>
  Contact.findByIdAndUpdate(contactId, body, { new: true });

// favorite contact
const favoriteContact = (contactId, body) =>
  Contact.findByIdAndUpdate(contactId, body, { new: true });

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  favoriteContact,
};
