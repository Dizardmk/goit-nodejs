module.exports = async ({ user: { email, id } }, res, next) => {
  try {
    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result: { email, id },
      },
    });
  } catch (error) {
    next(error);
  }
};
