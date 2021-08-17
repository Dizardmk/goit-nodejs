module.exports = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
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
