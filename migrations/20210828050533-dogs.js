'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log("migrating");
    await queryInterface.createTable('dogs_tbl', { 
      dog_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: {
        type: new Sequelize.STRING(256),
        allowNull: false,
      },
      caption: {
        type: new Sequelize.STRING(128),
        allowNull: false,
      },
    });
    console.log("migratie");
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('dogs_tbl');
  }
};
