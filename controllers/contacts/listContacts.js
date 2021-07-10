const contact = require('../../models/contactModel');

module.exports = async (_, res, next) => {
  try {
    const result = await contact.find();
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
