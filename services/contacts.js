const { Contact } = require('../models');
const joi = require('../utils/validate/contacts');

// list contacts
const listContacts = () => Contact.find({});

// get contact by id
const getContactById = contactId => Contact.findById(contactId);

// add contact
const addContact = body => {
  const { error } = joi.addContact.validate(body);
  if (error) {
    throw error;
  }
  return Contact.create(body);
};

// remove contact
const removeContact = contactId => Contact.findByIdAndDelete(contactId);

// update contact
const updateContact = (contactId, body) => {
  const { error } = joi.updateContact.validate(body);
  if (error) {
    throw error;
  }
  return Contact.findByIdAndUpdate(contactId, body, { new: true });
};

// favorite contact
const favoriteContact = (contactId, body) => {
  const { error } = joi.favoriteContact.validate(body);
  if (error) {
    throw error;
  }
  return Contact.findByIdAndUpdate(contactId, body, { new: true });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  favoriteContact,
};
