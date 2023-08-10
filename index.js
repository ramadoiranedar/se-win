const app = require('./src/app');
const config = require('./config/config');
const logger = require('./src/utils/loggerUtil');

const PORT = config.serverPort;
app.listen(PORT, () => {
  const runInfo = `Start the server and running on port ${PORT}`;
  logger.info(runInfo);
});
