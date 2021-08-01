const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');

module.exports = async (req, res, next) => {
  const tempDir = path.join(process.cwd(), 'public/temp');
  const uploadDir = path.join(process.cwd(), 'public/images/avatars');

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, tempDir);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
    limits: {
      fileSize: 10000,
    },
  });

  try {
    return res.json({
      status: 'Success',
      code: 200,
      message: 'image',
    });
  } catch (error) {
    next(error);
  }
};
