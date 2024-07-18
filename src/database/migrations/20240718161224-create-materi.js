"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("materis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_materi: {
        type: Sequelize.STRING,
      },
      tipe_materi: {
        type: Sequelize.ENUM("video", "end quiz", "single quiz", "summary"),
      },
      exp: {
        type: Sequelize.INTEGER,
      },
      gold: {
        type: Sequelize.INTEGER,
      },
      id_sub_bab: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("materis");
  },
};
