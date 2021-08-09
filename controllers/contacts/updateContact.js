const { contacts: service } = require('../../services');

module.exports = async ({ body, params: { contactId } }, res, next) => {
  try {
    const result = await service.updateContact(contactId, body);

    return result
      ? res.json({
          status: 'Success',
          code: 200,
          data: {
            result,
          },
        })
      : res.status(404).json({
          status: 'Not Found',
          code: 404,
          message: 'no contact found with that id',
        });
  } catch (error) {
    return error.message.includes('Cast to ObjectId failed')
      ? res.status(404).json({
          status: 'Not Found',
          code: 404,
          message: 'no contact found with that id',
        })
      : next(error);
  }
};
