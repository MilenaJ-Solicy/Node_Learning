'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Interests', [
      {
        interestName: 'Sports',
        description: 'Sports and Athletics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        interestName: 'Music',
        description: 'Music and Instruments',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        interestName: 'Travel',
        description: 'Travel and Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Interests', null, {});
  }
};
