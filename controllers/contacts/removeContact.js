const { contacts: service } = require('../../services');

module.exports = async ({ params: { contactId } }, res, next) => {
  try {
    const result = await service.removeContact(contactId);

    return result
      ? res.json({
          status: 'Success',
          code: 200,
          message: 'contact deleted',
        })
      : res.status(404).json({
          status: 'Not Found',
          code: 404,
          message: 'no contact found with that id',
        });
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return res.status(404).json({
        status: 'Not Found',
        code: 404,
        message: 'no contact found with that id',
      });
    }

    next(error);
  }
};
