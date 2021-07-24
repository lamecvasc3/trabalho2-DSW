'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('aluguel',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      id_carro: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_funcionario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
