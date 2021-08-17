const { users: service } = require('../../services');
const { sendMail } = require('../../helpers');
const { nanoid } = require('nanoid');

module.exports = async ({ body: { email, password } }, res) => {
  const user = await service.getUser({ email });
  if (user) {
    return res.status(409).json({
      status: 'Conflict',
      code: 409,
      message: 'user already registered',
    });
  }

  const verifyToken = nanoid();
  const { _id, avatarURL } = await service.signup({
    email,
    password,
    verifyToken,
  });

  await sendMail({
    to: email,
    subject: '✔ Verify your email',
    html: `<span>To complete the registration, click on the link:</span> <a href="http://localhost:3000/api/users/verify/${verifyToken}"><b>Verify account</b></a>`,
  });

  return res.status(201).json({
    status: 'Created',
    code: 201,
    data: {
      result: {
        _id,
        email,
        avatarURL,
        verifyToken,
      },
    },
  });
};
