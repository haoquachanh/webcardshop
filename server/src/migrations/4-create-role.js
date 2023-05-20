'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    });

    const roles = [
      { id: 1, name: 'admin' },
      { id: 2, name: 'user' },
    ];
    await queryInterface.bulkInsert('Roles', roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Roles', 'fk_role_user');
    await queryInterface.dropTable('Roles');
  }
};
