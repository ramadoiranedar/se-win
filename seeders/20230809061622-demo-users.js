'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "RADEN ARIO DAMAR",
        email: "demo@mail.com",
        password: '$2a$12$5ham8QZYPh1U9H7/xsH1Q.jaZKPjzGaGP4Ix0F3JjXAWQOFtMabFq', // default password is 'password123'
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
