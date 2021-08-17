const { contacts: service } = require('../../services');

module.exports = async ({ body, user: { id } }, res) => {
  const result = await service.addContact(id, body);

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result,
    },
  });
};
