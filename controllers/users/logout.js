const { users: service } = require('../../services');

module.exports = async ({ user: { id } }, res, next) => {
  try {
    await service.updateUser(id, { token: null });

    return res.json({
      status: 'Success',
      code: 200,
      message: 'logout success',
    });
  } catch (error) {
    next(error);
  }
};
