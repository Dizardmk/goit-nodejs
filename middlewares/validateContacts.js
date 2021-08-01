const Joi = require('joi');

// SCHEMA \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const schemaAddContact = Joi.object({
  name: Joi.string().alphanum().min(2).max(40).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] },
    })
    .pattern(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    )
    .required(),
  phone: Joi.string().min(10).max(20).required(),
});

const schemaUpdateContact = Joi.object({
  name: Joi.string().alphanum().min(2).max(40),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] },
    })
    .pattern(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    ),
  phone: Joi.string().min(10).max(20),
});

const schemaFavoriteContact = Joi.object({
  favorite: Joi.boolean().required(),
});

// VALIDATE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const validator = (schema, { body }, res, next) => {
  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({
      status: 'Bad Request',
      code: 400,
      message: error.message.replace(/"/g, ''),
    });
  }

  next();
};

module.exports = {
  addContact: (req, res, next) => validator(schemaAddContact, req, res, next),
  updateContact: (req, res, next) =>
    validator(schemaUpdateContact, req, res, next),
  favoriteContact: (req, res, next) =>
    validator(schemaFavoriteContact, req, res, next),
};
