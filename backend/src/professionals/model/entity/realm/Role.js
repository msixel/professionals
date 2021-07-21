const Sequelize = require("sequelize");

class Role extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(2),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        description:         {type: Sequelize.DataTypes.STRING(255),       allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_ROLE' 
      }
    );
  }
}
module.exports = Role;
