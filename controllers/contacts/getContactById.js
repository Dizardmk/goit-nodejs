const { contacts: service } = require('../../services');

module.exports = async ({ params: { contactId } }, res) => {
  const result = await service.getContactById(contactId);

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
};
