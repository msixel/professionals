const Sequelize = require("sequelize");

class Area extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(8),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        description:         {type: Sequelize.DataTypes.STRING(1024),      allowNull: true},
        parentId:            {type: Sequelize.DataTypes.STRING(8),         allowNull: true,
          references: {
            model: 'Area',
            key: 'id'
          }
        }
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true,
        tableName: 'TB_AREA' 
      }
    );
  }
}
module.exports = Area;
