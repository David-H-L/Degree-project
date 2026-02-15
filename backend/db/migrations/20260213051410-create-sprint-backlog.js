'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('sprintBacklog', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      sprintNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      endDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      productBacklogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'productBacklog',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sprintBacklog');
  }
};
