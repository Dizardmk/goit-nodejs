const { User } = require('../models');

module.exports = {
  // get user
  getUser: body => User.findOne(body),
  // get user by id
  getUserById: userId => User.findById(userId),
  // update user
  updateUser: (userId, body) => User.findByIdAndUpdate(userId, body),
  // signup user
  signup: ({ email, password }) => {
    const newUser = new User({ email });
    newUser.hashPassword(password);
    newUser.createAvatar(email);
    return newUser.save();
  },
};
