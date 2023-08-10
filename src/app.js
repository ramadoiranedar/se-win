const express = require('express');
const sequelize = require('../config/database'); // setup database
const bodyParser = require('body-parser');
const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', healthRoutes);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

module.exports = app;