const express = require('express');
const { getProfile } = require('../controllers/userController');
const authenticateJwt = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticateJwt);

router.get('/profile', getProfile);

module.exports = router;
