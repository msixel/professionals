const Sequelize = require("sequelize");

class AuthType extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(4),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        providerId:          {type: Sequelize.DataTypes.STRING(80),        allowNull: true}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true,
        tableName: 'TB_AUTH_TYPE' 
      }
    );
  }
}
module.exports = AuthType;
