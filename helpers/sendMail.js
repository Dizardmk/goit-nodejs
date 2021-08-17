const nodemailer = require('nodemailer');

module.exports = async function sendMail({ to, subject, html }) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const info = await transporter.sendMail({
    from: '"Nodemailer" <node@mailer.com>',
    to,
    subject,
    html,
  });

  console.log('\x1b[34m[nodemailer] Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log(
    '\x1b[34m[nodemailer] Preview URL: %s',
    nodemailer.getTestMessageUrl(info),
  );
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
