const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: 6,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
  },
  { versionKey: false },
);

userSchema.methods.hashPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createAvatar = function (email) {
  this.avatarURL = gravatar.url(email, {
    protocol: 'https',
    size: '250',
    default: 'retro',
  });
};

module.exports = model('user', userSchema);
