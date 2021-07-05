const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'contacts.json');
const shortid = require('shortid');

// GET ALL CONTACTS
async function listContacts() {
  return JSON.parse(await fs.readFile(contactsPath));
}

// GET CONTACT BY ID
async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find(({ id }) => id === contactId);
}

// ADD NEW CONTACT
async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = { id: shortid.generate(), name, email, phone };
  await updateContacts([...contacts, newContact]);
  return newContact;
}

// DELETE CONTACT BY ID
async function removeContact(contactId) {
  const contacts = await listContacts();
  await updateContacts(contacts.filter(({ id }) => id !== contactId));
  return contacts.find(({ id }) => id === contactId);
}

// UPDATE CONTACT
const updateContact = async (contactId, body) => {};

// UPDATE CONTACTS
async function updateContacts(contacts) {
  try {
    return await fs.writeFile(contactsPath, JSON.stringify(contacts));
  } catch (error) {
    error.message = 'contact update error <updateContacts>';
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
