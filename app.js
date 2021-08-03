const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const api = require('./api');
require('./config/passport');

// EXPRESS MIDDLEWARES
const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(express.static('public')).use(logger(formatsLogger)).use(cors());

// ROUTERS
app.use('/api/users', api.users).use('/api/contacts', api.contacts);

// ERROR HANDLER
app
  .use((_, res) => {
    res.status(404).json({
      status: 'Not Found',
      code: 404,
      message: 'not found',
    });
  })
  .use((error, _, res, __) => {
    const { code = 500, message = 'server error' } = error;
    res.status(code).json({
      status: 'Internal Server Error',
      code,
      message,
    });
  });

module.exports = app;
