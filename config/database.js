const Sequelize = require('sequelize');
const config = require('./config');
const logger = require('../src/utils/loggerUtil');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: config.development.port,
    dialect: config.development.dialect,
  }
);

sequelize.sync({ force: false }).then(() => {
  logger.info('Database and tables synced');
}).catch((error) => {
  logger.info('Error syncing database:', error);
  throw new error('Error syncing database:', error)
});

module.exports = sequelize;
