const logger = require('../utils/loggerUtil');
const User = require('../models/userModel');

const createUser = async (name, email, password) => {
  logger.info(`repositories.userRepository.createUser`);

  const newUser = await User.create({ name, email, password });
  return newUser;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};


const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById
};

