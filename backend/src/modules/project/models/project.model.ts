import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '../../../config/database.config';

import { IProject } from "../interfaces/project.interface";

export interface ProjectCreationAttributes extends Optional<IProject, 'id'> {}

class Project extends Model<IProject, ProjectCreationAttributes> implements IProject {
  public id!: number;
  public projectName!: string;
  public description!: string;
  public isDeleted!: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    projectName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    sequelize,
    tableName: 'projects',
    timestamps: true,
  }
)

export default Project;