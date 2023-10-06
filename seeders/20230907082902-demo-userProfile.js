'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('UserProfiles', [
         {
             fullName: 'John Doe',
             bio: 'A software developer',
             userId: 1,
             createdAt: new Date(),
             updatedAt: new Date(),
         }
     ]);
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('UserProfiles', null, {});
  }
};
