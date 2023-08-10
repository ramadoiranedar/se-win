require('dotenv').config();

const { SERVER_PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, SALT_ROUNDS, JWT_SECRET, JWT_EXPIRES } = process.env;

module.exports = {
  serverPort: SERVER_PORT,

  development: {
    dialect: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'sequelize_meta',
  migrationStorageTableSchema: 'public',
  seederStorage: 'sequelize',
  seederStorageTableName: 'sequelize_data',
  seederStorageTableSchema: 'public',

  saltRounds: SALT_ROUNDS,

  jwtSecret: JWT_SECRET,
  jwtExpires: JWT_EXPIRES,
};