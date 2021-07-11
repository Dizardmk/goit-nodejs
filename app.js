const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const contactsApi = require('./api/contactsApi');

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());

app.use('/api/contacts', contactsApi);

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not Found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Internal Server Error' } = error;
  res.status(code).json({
    status: 'server error',
    code,
    message,
  });
});

module.exports = app;
