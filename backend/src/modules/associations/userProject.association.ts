import User from '../users/models/users.model';
import Project from '../project/models/project.model';
import UserProject from '../UserProject/models/UserProject.model';

// Many to Many
User.belongsToMany(Project, {
  through: UserProject,
  foreignKey: 'userId',
});

Project.belongsToMany(User, {
  through: UserProject,
  foreignKey: 'projectId',
});
