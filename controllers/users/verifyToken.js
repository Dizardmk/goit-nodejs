const { users: service } = require('../../services');

module.exports = async ({ params: { verifyToken } }, res, next) => {
  try {
    const user = await service.getUser({ verifyToken });
    if (!user) {
      return res.status(400).json({
        status: 'Bad Request',
        code: 400,
        message: 'incorrect or deprecated verifyToken',
      });
    }

    await service.updateUser(user.id, { verify: true, verifyToken: null });
    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result: {
          email: user.email,
          message: 'verification successful',
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
