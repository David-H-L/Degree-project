import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { ISprintBacklog } from "../interfaces/sprintBacklog.interface";

export interface SprintBacklogCreationAttributes extends Optional<ISprintBacklog, 'id'> {}

class SprintBacklog extends Model<ISprintBacklog, SprintBacklogCreationAttributes> implements ISprintBacklog {
  public id!: number;
  public sprintNumber!: number;
  public endDate!: Date;
  public startDate!: Date;
  public isDeleted!: boolean;
  public productBacklogId!: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

SprintBacklog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sprintNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    productBacklogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'productBacklog',
          key: 'id',
      },
      onDelete: 'CASCADE',
    }
  },
  {
    sequelize,
    tableName: 'sprintBacklog',
    timestamps: true,
  }
)

export default SprintBacklog;