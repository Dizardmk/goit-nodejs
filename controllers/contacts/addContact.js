const contact = require('../../models/contactModel');

module.exports = async ({ body }, res, next) => {
  try {
    const result = await contact.create(body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
