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

const schemaUpdateContact = Joi.any()
  .valid(
    // name
    Joi.object({
      name: Joi.string().alphanum().min(2).max(40),
    }),
    // email
    Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] },
        })
        .pattern(
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        ),
    }),
    // phone
    Joi.object({
      phone: Joi.string().min(10).max(20),
    }),
  )
  .required();

const schemaFavoriteContact = Joi.object({
  favorite: Joi.boolean().required(),
});

// VALIDATE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const checkError = (schema, { body }, res, next) => {
  const { error } = schema.validate(body);

  if (error) {
    console.log('-------------------------------checkError middlevare');
    return res.status(400).json({
      status: 'Bad Request',
      code: 400,
      mmessage: error.message.replace(/"/g, ''),
    });
  }

  next();
};

module.exports = {
  validateAddContact: (req, res, next) =>
    checkError(schemaAddContact, req, res, next),
  validateUpdateContact: (req, res, next) =>
    checkError(schemaUpdateContact, req, res, next),
  validateFavoriteContact: (req, res, next) =>
    checkError(schemaFavoriteContact, req, res, next),
};
