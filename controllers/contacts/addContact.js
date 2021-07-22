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
    if (error.message.includes('is required')) {
      return res.status(400).json({
        status: 'Bad Request',
        code: 400,
        message: 'missing required field: name, email or phone',
      });
    }
    next(error);
  }
};
