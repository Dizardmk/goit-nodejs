const contact = require('../../models/contactModel');

module.exports = async ({ params: { contactId } }, res, _) => {
  try {
    const result = await contact.findById(contactId);

    // при несуществующем ID иногда приходит null с "code": 200.
    if (!result) {
      throw Error;
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'not found',
      code: 404,
      message: 'Contact with such ID not found',
    });
  }
};
