module.exports = async ({ user: { id, email } }, res, next) => {
  try {
    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result: { id, email },
      },
    });
  } catch (error) {
    next(error);
  }
};
