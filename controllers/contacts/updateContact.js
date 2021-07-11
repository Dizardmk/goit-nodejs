const contact = require('../../models/contactModel');

module.exports = async ({ body, params: { contactId } }, res, _) => {
  try {
    const result = await contact.findByIdAndUpdate(contactId, body);

    // contactId
    if (!result) {
      throw Error;
    }

    // body
    if (Object.keys(body).length === 0) {
      throw new Error('400');
    }

    // message, т.к в result не приходит обновленный контакт.
    res.json({
      status: 'success',
      code: 200,
      message: 'Contact succesfully updated',
    });
  } catch (error) {
    if (error.message === '400') {
      return res.status(400).json({
        status: 'bad request',
        code: 400,
        message: 'Missing the body of the request',
      });
    }

    res.status(404).json({
      status: 'not found',
      code: 404,
      message: 'Contact with such ID not found',
    });
  }
};
