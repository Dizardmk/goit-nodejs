const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, './db/contacts.json');
const shortid = require('shortid');

// GET ALL CONTACTS
async function listContacts() {
  try {
    return JSON.parse(await fs.readFile(contactsPath));
  } catch (error) {
    error.message = 'contacts read error <listContacts>';
    throw error;
  }
}

// GET CONTACT BY ID
async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(({ id }) => id === +contactId);

    if (!contact) {
      throw new Error('incrrect contact id <getContactById>');
    }

    return contact;
  } catch (error) {
    error.message = 'contact by id not found <getContactById>';
    throw error;
  }
}

// DELETE CONTACT BY ID
async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    return await updateContacts(contacts.filter(({ id }) => id !== +contactId));
  } catch (error) {
    error.message = 'contact delete error <removeContact>';
    throw error;
  }
}

// ADD NEW CONTACT
async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { name, email, phone, id: shortid.generate() };
    return await updateContacts([...contacts, newContact]);
  } catch (error) {
    error.message = 'contact adding error <addContact>';
    throw error;
  }
}

// UPDATE CONTACTS
async function updateContacts(contacts) {
  try {
    return await fs.writeFile(contactsPath, JSON.stringify(contacts));
  } catch (error) {
    error.message = 'contact update error <updateContacts>';
    throw error;
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
