const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const config = require('../../config/config'); 
const jwtUtil = require('../utils/jwtUtil');
const logger = require('../utils/loggerUtil');

const userService = require('../services/userService');
const User = require('../models/userModel');

const register = async (req, res) => {
  logger.info(`controllers.authController.register`);

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.warn('Validation error');
      return res.status(400).json({ error: 'Validation error: ' + errors.array()[0].msg });
    }

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, config.saltRounds);
    const newUser = await userService.registerUser(name, email, hashedPassword);

    return res.json(newUser);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: 'An error occurred while registering user.' });
  }
};

const login = async (req, res) => {
  logger.info('controllers.authController.login');

  try {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.warn('Validation error');
      return res.status(400).json({ error: 'Validation error: ' + errors.array()[0].msg });
    }
    
    const { email, password } = req.body;

    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const payload = {
      name: user.name,
      email: user.email,
      id: user.id
    };
    const token = jwtUtil.generateToken(payload);

    return res.json({ token: token });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: 'An error occurred while logging in.' });
  }
};

module.exports = {
  register,
  login
};
