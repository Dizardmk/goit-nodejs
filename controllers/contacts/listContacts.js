const { contacts: service } = require('../../services');

module.exports = async (_, res, next) => {
  try {
    const result = await service.listContacts();

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
