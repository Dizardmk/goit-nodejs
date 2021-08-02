const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');
const { users: service } = require('../../services');

module.exports = async (req, res, next) => {
  const userId = req.user._id.toString();
  if (!req.file) {
    return res.status(400).json({
      status: 'Error',
      code: 400,
      error: 'no file attached',
    });
  }
  const { path: tempFileName } = req.file;
  const uploadDir = path.join(process.cwd(), 'public/avatars');

  try {
    const fileName = path.join(uploadDir, `${userId}.jpg`);
    await imageNormalize(tempFileName);

    const result = await service.updateUser(userId, { avatarURL: fileName });
    await fs.rename(tempFileName, fileName);

    res.status(200).json({
      status: 'Success',
      code: 200,
      data: result,
    });
  } catch (error) {
    fs.unlink(tempFileName);
    next(error);
  }
};

const imageNormalize = (imagePath) => {
  Jimp.read(`${imagePath}`, (err, convertedImage) => {
    if (err) {
      throw err;
    }
    convertedImage.resize(250, 250).quality(80).write(`${imagePath}`);
  });
};
