import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IProductBacklog } from "../interfaces/productBacklog.interface";

export interface ProductBacklogCreationAttributes extends Optional<IProductBacklog, 'id'> {}

class ProductBacklog extends Model<IProductBacklog, ProductBacklogCreationAttributes> implements IProductBacklog {
  public id!: number;
  public isDeleted!: boolean;
  public projectId!: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

ProductBacklog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'projects',
          key: 'id',
      },
      onDelete: 'CASCADE',
    }
  },
  {
    sequelize,
    tableName: 'productBacklog',
    timestamps: true,
  }
)

export default ProductBacklog;