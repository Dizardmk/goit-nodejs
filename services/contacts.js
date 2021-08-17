const { Contact } = require('../models');

module.exports = {
  // list contact
  listContacts: (userId) => Contact.find({ owner: userId }),
  // get contact  by id
  getContactById: (contactId) => Contact.findById(contactId),
  // add contact
  addContact: (userId, body) => Contact.create({ owner: userId, ...body }),
  // remove contact
  removeContact: (contactId) => Contact.findByIdAndDelete(contactId),
  // update contact
  updateContact: (contactId, body) =>
    Contact.findByIdAndUpdate(contactId, body, { new: true }),
  // favorite contact
  favoriteContact: (contactId, body) =>
    Contact.findByIdAndUpdate(contactId, body, { new: true }),
};
