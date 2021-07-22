const Joi = require('joi');

module.exports = Joi.object({
  favorite: Joi.boolean().required(),
});
