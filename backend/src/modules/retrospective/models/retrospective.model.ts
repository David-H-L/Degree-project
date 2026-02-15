import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IRetrospective } from "../interfaces/retrospective.interface";

export interface RetrospectiveCreationAttributes extends Optional<IRetrospective, 'id'> {}

class Retrospective extends Model<IRetrospective, RetrospectiveCreationAttributes> implements IRetrospective {
  public id!: number;
  public description!: string;
  public isDeleted!: boolean;
  public sprintBacklogId!: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Retrospective.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sprintBacklogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'sprintBacklog',
          key: 'id',
      },
      onDelete: 'CASCADE',
    }
  },
  {
    sequelize,
    tableName: 'retrospective',
    timestamps: true,
  }
)

export default Retrospective;