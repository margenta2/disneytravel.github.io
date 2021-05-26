'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
    {
      name: "Mickey Mouse",
      username: "mmouse1",
      password: "mickey1",
      hotelId: 2,
      parkId: 4
  },
  {
      name: "Minnie Mouse",
      username: "minniegirl",
      password: "minnie1",
      hotelId: 4,
      parkId: 3
  },
  {
      name: "Donald Duck",
      username: "dduck1",
      password: "donald1",
      hotelId: 5,
      parkId: 1
  },
  {
      name: "Goofy",
      username: "gooftroop",
      password: "goofy1",
      hotelId: 7,
      parkId: 5
  },
  {
      name: "Daisy Duck",
      username: "daisygirl",
      password: "daisy1",
      hotelId: 8,
      parkId: 2
  },
  {
      name: "Chip",
      username: "RRanger1",
      password: "chip1",
      hotelId: 9,
      parkId: 1
  },
  {
      name: "Dale",
      username: "RRanger2",
      password: "dale1",
      hotelId: 6,
      parkId: 2
  },
  {
      name: "Tinker Bell",
      username: "TBell",
      password: "tinker1",
      hotelId: 10,
      parkId: 3
  },
  {
      name: "Peter Pan",
      username: "PPan",
      password: "peter1",
      hotelId: 3,
      parkId: 3
  },
  {
      name: "Captain Hook",
      username: "CHook",
      password: "captain1",
      hotelId: 4,
      parkId: 4
  }
], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
