const { User } = require('../models');
const joi = require('../utils/validate/users');

// get user
const getUser = body => User.findOne(body);

// get user by id
const getUserById = userId => User.findById(userId);

// update user
const updateUser = (userId, body) => User.findByIdAndUpdate(userId, body);

// signup user
const signup = ({ email, password }) => {
  const { error } = joi.user.validate({ email, password });
  if (error) {
    throw error;
  }

  const newUser = new User({ email });
  newUser.hashPassword(password);
  return newUser.save();
};

module.exports = {
  getUser,
  getUserById,
  updateUser,
  signup,
};