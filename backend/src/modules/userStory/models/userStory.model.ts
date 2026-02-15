import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IUserStory } from "../interfaces/userStory.interface";

export interface UserStoryCreationAttributes extends Optional<IUserStory, 'id'> {}

class UserStory extends Model<IUserStory, UserStoryCreationAttributes> implements IUserStory {
  public id!: number;
  public code!: string;
  public name!: string;
  public description!: string;
  public points!: number;
  public state!: string
  public priority!: string;
  public isDeleted!: boolean;
  public userId!: number;
  public productBacklogId!: number;
  public sprintBacklogId!: number;
  public retrospectiveId!: number
  declare createdAt: Date;
  declare updatedAt: Date;
}

UserStory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,    
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    productBacklogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productBacklog',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    sprintBacklogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'sprintBacklog',
          key: 'id',
      },
      onDelete: 'CASCADE',
    },
    retrospectiveId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'retrospective',
          key: 'id',    
      },
    }
  },
  {
    sequelize,
    tableName: 'userStory',
    timestamps: true,
  }
)

export default UserStory;