const logger = require('../utils/loggerUtil');
const jwtUtil = require('../utils/jwtUtil');

const userService = require('../services/userService');

const getProfile = async (req, res) => {
  logger.info('controllers.userController.getProfile');

  try {
    const user = await userService.getUserById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ error: 'An error occurred while fetching user profile.' });
  }
};

module.exports = {
  getProfile,
};
