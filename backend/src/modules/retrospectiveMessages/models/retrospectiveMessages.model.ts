import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IRetrospectiveMessages } from "../interfaces/retrospectiveMessages.interface";

export interface RetrospectiveMessagesCreationAttributes extends Optional<IRetrospectiveMessages, 'id'> {}

class RetrospectiveMessages extends Model<IRetrospectiveMessages, RetrospectiveMessagesCreationAttributes> implements IRetrospectiveMessages {
  public id!: number;
  public description!: string;
  public isDeleted!: boolean;
  public userId!: number;
  public retrospectiveId!: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

RetrospectiveMessages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
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
    retrospectiveId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'retrospective',
            key: 'id',
        },
        onDelete: 'CASCADE',
    }
  },
  {
    sequelize,
    tableName: 'retrospectiveMessages',
    timestamps: true,
  }
)

export default RetrospectiveMessages;