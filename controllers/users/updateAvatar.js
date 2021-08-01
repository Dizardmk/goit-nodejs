const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');
const { users: service } = require('../../services');

module.exports = async (
  { user: { _id: userId }, file: { path: tempFileName } },
  res,
  next,
) => {
  const avatarsDir = path.join(process.cwd(), 'public/images/avatars');

  try {
    const avatarURL = path.join(avatarsDir, `${userId}.jpg`);
    await optimizeImage(tempFileName);

    const result = await service.updateUser(userId, { avatarURL });
    await fs.rename(tempFileName, avatarURL);

    return res.json({
      status: 'Success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    fs.unlink(tempFileName);
    next(error);
  }
};

const optimizeImage = image => {
  Jimp.read(`${image}`, (err, originalImage) => {
    if (err) {
      throw err;
    }
    originalImage.resize(250, 250).quality(80).write(`${image}`);
  });
};
