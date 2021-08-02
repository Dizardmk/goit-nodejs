const { Contact } = require('../models');

module.exports = {
  // list contact
  listContacts: () => Contact.find({}),
  // get contact  by id
  getContactById: (contactId) => Contact.findById(contactId),
  // add contact
  addContact: (body) => Contact.create(body),
  // remove contact
  removeContact: (contactId) => Contact.findByIdAndDelete(contactId),
  // update contact
  updateContact: (contactId, body) =>
    Contact.findByIdAndUpdate(contactId, body, { new: true }),
  // favorite contact
  favoriteContact: (contactId, body) =>
    Contact.findByIdAndUpdate(contactId, body, { new: true }),
};
