const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, PORT = process.env.PORT || 3000 } = process.env;

(async () => {
  try {
    await mongoose.connect(DB_HOST, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    return app.listen(PORT, () => {
      console.log(`\x1b[32m[mongodb] connected to port ${PORT}\x1b[0m`);
    });
  } catch (error) {
    console.log(`\x1b[31m[mongodb] ${error}\x1b[0m`);
    return process.exit(1);
  }
})();
