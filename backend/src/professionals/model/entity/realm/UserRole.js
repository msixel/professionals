const Sequelize = require("sequelize");

class UserRole extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        UserId:              {type: Sequelize.DataTypes.UUID,              allowNull: false, primaryKey: true,
          references: {
            model: 'User',
            key: 'id'
          }
        },
        RoleId:              {type: Sequelize.DataTypes.STRING(2),         allowNull: false, primaryKey: true,
          references: {
            model: 'Role',
            key: 'id'
          }
        }
      },
      { 
        sequelize, 
        timestamps: false,
        paranoid: false, 
        tableName: 'TB_USER_ROLE' 
      }
    );
  }
}
module.exports = UserRole;
