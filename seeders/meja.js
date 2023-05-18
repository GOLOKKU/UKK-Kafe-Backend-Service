'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meja', [
      {
        nomor_meja: '1',
        status: 'kosong',
      },
      /*
      {
        nomor_meja: '3',
        status: 'kosong',
      },*/
    ], {});
  },

  //reset
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meja', null, {});
  }
};
