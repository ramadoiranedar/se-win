const logger = require('../utils/loggerUtil');

const healthCheck = (req, res) => {
  logger.info(`controllers.healthController.healthCheck`);

  res.status(200).json({ message: 'OK' });
};

module.exports = {
  healthCheck,
};
