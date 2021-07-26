const { contacts: service } = require('../../services');

module.exports = async ({ body, params: { contactId } }, res, next) => {
  try {
    const result = await service.favoriteContact(contactId, body);

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
          message: 'contact with such id not found',
        });
  } catch (error) {
    next(error);
  }
};
