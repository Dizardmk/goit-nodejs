const multer = require('multer');
const path = require('path');

const tempDir = path.join(process.cwd(), 'public/temp');

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, tempDir);
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    filesize: 10000,
  },
});

const upload = multer({
  storage,
});

module.exports = upload.single('avatar');
