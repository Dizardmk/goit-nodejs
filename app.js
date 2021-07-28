const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const api = require('./api');
require('./config/passport');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());

app.use('/api/users', api.users);
app.use('/api/contacts', api.contacts);

app.use((_, res) => {
  res.status(404).json({
    status: 'Not Found',
    code: 404,
    message: 'not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'server error' } = error;
  res.status(code).json({
    status: 'Internal Server Error',
    code,
    message,
  });
});

module.exports = app;
