const { contacts: service } = require('../../services');

module.exports = async ({ user: { id } }, res) => {
  const result = await service.listContacts(id);

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result,
      total: result.length,
    },
  });
};
