const Sequelize = require("sequelize");

class ReferenceType extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(4),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        description:         {type: Sequelize.DataTypes.STRING(1024),      allowNull: true}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_REFERENCE_TYPE' 
      }
    );
  }
}
module.exports = ReferenceType;
