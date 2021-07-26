const { users: service } = require('../../services');

module.exports = async ({ body: { email, password } }, res, next) => {
  try {
    const user = await service.getUser({ email });
    if (user) {
      return res.status(409).json({
        status: 'Conflict',
        code: 409,
        message: 'user already registered',
      });
    }

    await service.signup({ email, password });
    return res.status(201).json({
      status: 'Created',
      code: 201,
      massage: 'user created',
    });
  } catch (error) {
    next(error);
  }
};
