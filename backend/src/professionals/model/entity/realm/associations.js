const Sequelize = require("sequelize");
const Credential = require("./Credential");
const Role = require("./Role");
const User = require("./User");
const UserRole = require("./UserRole");


User.hasMany(Credential, {
    foreignKey: 'userId'
  });
Credential.belongsTo(User);

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });