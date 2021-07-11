const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().alphanum().min(2).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.number().min(8).required(),
});
