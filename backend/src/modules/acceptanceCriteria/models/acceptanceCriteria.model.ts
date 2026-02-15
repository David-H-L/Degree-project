import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IAcceptanceCriteria } from "../interfaces/acceptanceCriteria.interface";

export interface AcceptanceCriteriaCreationAttributes extends Optional<IAcceptanceCriteria, 'id'> {}

class AcceptanceCriteria extends Model<IAcceptanceCriteria, AcceptanceCriteriaCreationAttributes> implements IAcceptanceCriteria {
  public id!: number;
  public criteriaName!: string;
  public isDeleted!: boolean;
  public userStoryId!: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

AcceptanceCriteria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    criteriaName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    userStoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'userStory',
          key: 'id',
      },
      onDelete: 'CASCADE',
    }
  },
  {
    sequelize,
    tableName: 'acceptanceCriteria',
    timestamps: true,
  }
)

export default AcceptanceCriteria;