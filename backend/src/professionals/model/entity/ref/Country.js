const Sequelize = require("sequelize");

class Country extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(2),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        locale:              {type: Sequelize.DataTypes.STRING(5),         allowNull: false},
        currencyCode:        {type: Sequelize.DataTypes.STRING(3),         allowNull: false},
        provinceDesignation: {type: Sequelize.DataTypes.STRING(80),        allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true, 
        paranoid: true,
        tableName: 'TB_COUNTRY' 
      }
    );
  }
}
module.exports = Country;
