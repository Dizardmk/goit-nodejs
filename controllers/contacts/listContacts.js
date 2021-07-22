const { contacts: service } = require('../../services');

module.exports = async (_, res, next) => {
  try {
    const result = await service.listContacts();

    if (result.length === 0) {
      return res.json({
        status: 'No Content',
        code: 204,
        message: 'No contacts',
      });
    }

    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result,
        total: result.length,
      },
    });
  } catch (error) {
    next(error);
  }
};
