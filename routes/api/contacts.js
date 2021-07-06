const express = require('express');
const router = express.Router();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model');
const contactsSchema = require('../../utils/validate/contacts');

// @ GET /api/contacts
router.get('/', async (_, res, next) => {
  try {
    const contacts = await listContacts();
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @ GET /api/contacts/:contactId
router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const contact = await getContactById(contactId);
    return contact
      ? res.json({
          status: 'success',
          code: 200,
          data: {
            result: contact,
          },
        })
      : res.status(404).json({
          status: 'error',
          code: 404,
          message: 'Contact with such ID not found',
        });
  } catch (error) {
    next(error);
  }
});

// @ POST /api/contacts
router.post('/', async ({ body }, res, next) => {
  const { error } = contactsSchema.validate(body);

  try {
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: `Missing required name field. ${error.message}`,
      });
    }

    const contact = await addContact(body);
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @ DELETE /api/contacts/:contactId
router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const сontactIsDeleted = await removeContact(contactId);
    return сontactIsDeleted
      ? res.json({
          status: 'success',
          code: 200,
          message: 'Contact succesfully deleted',
        })
      : res.status(404).json({
          status: 'error',
          code: 404,
          message: 'Contact with such ID not found',
        });
  } catch (error) {
    next(error);
  }
});

// @ PUT /api/contacts/:contactId
router.put('/:contactId', async (req, res, next) => {
  const {
    body,
    params: { contactId },
  } = req;
  const { error } = contactsSchema.validate(body);

  try {
    if (error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: `Missing fields. ${error.message}`,
      });
    }

    const updatedContact = await updateContact(contactId, body);
    return updatedContact === -1
      ? res.status(404).json({
          status: 'error',
          code: 404,
          message: 'Not found',
        })
      : res.json({
          status: 'success',
          code: 200,
          data: {
            result: updatedContact,
          },
        });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
