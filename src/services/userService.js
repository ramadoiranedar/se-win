const bcrypt = require('bcrypt');
const logger = require('../utils/loggerUtil');

const userRepository = require('../repositories/userRepository');

const registerUser = async (name, email, password) => {
  logger.info(`services.userService.registerUser`);
  const newUser = await userRepository.createUser(name, email, password);
  return newUser;
};

const getUserByEmail = async (email) => {
  logger.info('services.userService.getUserByEmail');
  const user = await userRepository.getUserByEmail(email);
  return user;
};

const getUserById = async (id) => {
  logger.info('services.userService.getUserById');
  const user = await userRepository.getUserById(id);
  return user;
};

module.exports = {
  registerUser,
  getUserByEmail,
  getUserById
};
