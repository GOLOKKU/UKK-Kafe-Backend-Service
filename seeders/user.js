'use strict';
const bcrypt = require("bcrypt");

/** @type {import('-cli').Migration} */
module.exports = {
  async up(queryInterface, ) {
    await queryInterface.bulkInsert('user', [
      {
        nama_user: 'admin',
        role: 'admin',
        username: 'admin',
        password: bcrypt.hashSync('123456789', 10),
      }, {
        nama_user: 'manajer',
        role: 'manajer',
        username: 'manajer',
        password: bcrypt.hashSync('123456789', 10),
      },
      {
        nama_user: 'kasir',
        role: 'kasir',
        username: 'kasir',
        password: bcrypt.hashSync('123456789', 10),
      },
      /*
      {
        nama_user: 'kasir',
        role: 'kasir',
        username: 'kasir',
        password: bcrypt.hashSync('kasir', 10),
      },*/
    ], {});
  },

  //reset
  async down(queryInterface) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
