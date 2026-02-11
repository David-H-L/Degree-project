import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database.config";

class UserProject extends Model {}

UserProject.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    sequelize,
    tableName: 'user_projects',
    timestamps: false,
  }
);

export default UserProject;
