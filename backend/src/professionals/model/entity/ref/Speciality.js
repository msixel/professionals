const Sequelize = require("sequelize");

class Speciality extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.SMALLINT.UNSIGNED, allowNull: false, primaryKey: true},
        name:                {type: Sequelize.STRING(80),                  allowNull: false},
        description:         {type: Sequelize.DataTypes.STRING(1024),      allowNull: true},
        areaId:              {type: Sequelize.DataTypes.STRING(8),         allowNull: false,
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
        tableName: 'TB_SPECIALITY' 
      }
    );
  }
}
module.exports = Speciality;
