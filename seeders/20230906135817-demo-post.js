'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      title: 'Life_info',
      content: 'Was born on 1995',
      userId: 1,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
