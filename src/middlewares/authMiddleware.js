const jwt = require('jsonwebtoken');
const config = require('../../config/config'); 
const jwtUtil = require('../utils/jwtUtil');
const logger = require('../utils/loggerUtil');

const authenticateJwt = (req, res, next) => {
  logger.info('middlewares.authenticateJwt');

  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Missing authentication token' });
  }

  try {
    const decoded = jwtUtil.verifyToken(token, config.jwtSecret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      logger.error('Expired authentication token:', error);
      return res.status(401).json({ error: 'Authentication token has expired' });
    }

    logger.error('JWT verification error:', error);
    return res.status(401).json({ error: 'Invalid authentication token' });
  }
};

module.exports = authenticateJwt;
