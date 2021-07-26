const app = require('../app');
const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, PORT = process.env.PORT || 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\x1b[32m[mongodb] connected to port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(`\x1b[31m[mongodb] ${error}`);
    return process.exit(1);
  });
