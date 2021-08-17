const fs = require('fs/promises');
const path = require('path');
const { optimizeImage } = require('../../helpers');
const { users: service } = require('../../services');

module.exports = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      status: 'Error',
      code: 400,
      error: 'no file attached',
    });
  }

  const {
    user: { _id: userId },
    file: { path: tempFileName },
  } = req;
  if (!tempFileName) {
    return fs.unlink(tempFileName);
  }

  const uploadDir = path.join(process.cwd(), 'public/avatars');
  const fileName = path.join(uploadDir, `${userId}.jpg`);
  await optimizeImage(tempFileName);

  const { avatarURL } = await service.updateUser(userId, {
    avatarURL: `http://localhost:3000/avatars/${userId}.jpg`,
  });

  await fs.rename(tempFileName, fileName);

  return res.json({
    status: 'Success',
    code: 200,
    data: {
      result: { avatarURL },
    },
  });
};
