'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[{
      email:"Thecuong2003",
      password:'123456789',
      firstName: 'Cuong',
      lastName:'The',
      address:'QT',
      gender:1,
      typeRole:'ROLE',
      keyRole:'R1',
      createdAt: new Date(),
      updatedAt:new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
