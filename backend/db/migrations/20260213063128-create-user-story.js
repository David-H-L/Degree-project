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
    await queryInterface.createTable('userStory', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },

      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      points: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      priority: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
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

      sprintBacklogId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sprintBacklog',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },

      retrospectiveId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'retrospective',
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
    await queryInterface.dropTable('userStory');
  }
};
