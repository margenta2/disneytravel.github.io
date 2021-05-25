'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Parks', [
    {
      name: "Magic Kingdom",
      address: "1100 Seven Seas Drive, Lake Buena Vista FL 32836",
      hours: "8:00 AM to 9:00 PM",
      userId: 1
  },
  {
      name: "Epcot",
      address: "200 Epcot Center Dr, Lake Buena Vista FL 32836",
      hours: "11:00 AM to 10:00 PM",
      userId: 3
  },
  {
      name: "Hollywood Studios",
      address: "351 S Studio Dr, Lake Buena Vista FL 32836",
      hours: "9:00 AM to 8:00 PM",
      userId: 4
  },
  {
      name: "Animal Kingdom",
      address: "2901 Osceola Pkwy, Bay Lake FL 34747",
      hours: "8:00 AM to 7:00 PM",
      userId: 2
  },
  {
      name: "Blizzard Beach",
      address: "1534 Blizzard Beach Drive Orlando FL 32836",
      hours: "11:00 AM to 6:00 PM",
      userId: 5
  }
], {})
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
