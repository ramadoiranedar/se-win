const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES } = process.env;

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return error;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
