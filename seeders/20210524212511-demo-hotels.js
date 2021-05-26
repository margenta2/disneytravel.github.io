'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hotels', [
      {
        name: "Animal Kingdom Lodge",
        address: "2901 Osceola Parkway, Lake Buena Vista FL 32830",
        transportation: "Bus",
        category: "Deluxe",
        userId: 2
      },
      {
        name: "Polynesian Village Resort",
        address: "1600 Seven Seas Drive, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus,Monorail",
        category: "Deluxe",
        userId: 3
      },
      {
        name: "Grand Floridian Resort & Spa",
        address: "4401 Floridian Way, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus,Monorail",
        category: "Deluxe",
        userId: 4
      },
      {
        name: "Wilderness Lodge",
        address: "901 Timberline Drive, Lake Buena Vista FL 32830",
        transportation: "Bus,Boat",
        category: "Deluxe",
        userId: 6
      },
      {
        name: "Beach Club Resort",
        address: "1800 Epcot Resorts Boulevard, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus",
        category: "Deluxe",
        userId: 7
      },
      {
        name: "Contemporary Resort",
        address: "4600 North World Drive, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus,Monorail",
        category: "Deluxe",
        userId: 1
      },
      {
        name: "Yacht Club Resort",
        address: "1700 Epcot Resorts Boulevard, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus",
        category: "Deluxe",
        userId: 8
      },
      {
        name: "BoardWalk Inn",
        address: "2101 North Epcot Resorts Boulevard, Lake Buena Vista FL 32830",
        transportation: "Boat,Bus",
        category: "Deluxe",
        userId: 9
      },
      {
        name: "Port Orleans Resort - French Quarter",
        address: "2201 Orleans Drive, Lake Buena Vista FL 32830",
        transportation: "Bus,Boat",
        category: "Moderate",
        userId: 10
      },
      {
        name: "Coronado Springs Resort",
        address: "1000 West Buena Vista Drive, Lake Buena Vista FL 32830",
        transportation: "Bus",
        category: "Moderate",
        userId: 5
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Hotels', null, {});

  }
};
