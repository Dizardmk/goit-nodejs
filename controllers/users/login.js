const { users: service } = require('../../services');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async ({ body: { email, password } }, res, next) => {
  try {
    const user = await service.getUser({ email });
    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        status: 'Bad Request',
        code: 400,
        message: 'incorrect email or password',
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    await service.updateUser(user._id, { token });

    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result: token,
      },
    });
  } catch (error) {
    next(error);
  }
};
