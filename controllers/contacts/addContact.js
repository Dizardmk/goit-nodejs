const { contacts: service } = require('../../services');

module.exports = async ({ body }, res, next) => {
  try {
    const result = await service.addContact(body);

    return res.status(201).json({
      status: 'Created',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
