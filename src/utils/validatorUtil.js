const { check, _ } = require('express-validator');

const validateRegistration = [
  check('name').notEmpty().withMessage('Name is required').isLength({ max: 255 }).withMessage('Name max 255 characters'),
  check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
  check('password').notEmpty().withMessage('Password is required'),
];

const validateLogin = [
  check('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
  check('password').notEmpty().withMessage('Password is required'),
];

module.exports = {
  validateRegistration,
  validateLogin
};