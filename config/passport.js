const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { users: service } = require('../services');
require('dotenv').config();

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const jwtStrategy = new Strategy(settings, async ({ id }, done) => {
  try {
    const user = await service.getUserById(id);
    if (!user || !user.token) {
      throw new Error('user not found');
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use('jwt', jwtStrategy);
