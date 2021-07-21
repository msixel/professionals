const Sequelize = require("sequelize");
const User = require("./realm/User");
const UserAddress = require("./UserAddress");
const UserContact = require("./UserContact");

User.hasMany(UserAddress, {
    foreignKey: 'userId'
  });
UserAddress.belongsTo(User);

User.hasMany(UserContact, {
  foreignKey: 'userId'
});
UserContact.belongsTo(User);
