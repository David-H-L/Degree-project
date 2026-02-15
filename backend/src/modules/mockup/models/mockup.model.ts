import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IMockup } from "../interfaces/mockup.interface";

export interface MockupCreationAttributes extends Optional<IMockup, 'id'> {}

class Mockup extends Model<IMockup, MockupCreationAttributes> implements IMockup {
  public id!: number;
  public photo!: Buffer;
  public userStoryId!: number;
}

Mockup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
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
    tableName: 'mockup',
  }
)

export default Mockup;