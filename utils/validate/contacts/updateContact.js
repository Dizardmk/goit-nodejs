const Joi = require('joi');

module.exports = Joi.any()
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

// module.exports = Joi.object({
//   name: Joi.string().alphanum().min(2).max(40).required(),
//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ['com', 'net', 'org', 'ru', 'ua'] },
//     })
//     .pattern(
//       /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
//     ),
//   phone: Joi.string().min(10).max(20),
// });
