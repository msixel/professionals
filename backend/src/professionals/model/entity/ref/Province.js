const Sequelize = require("sequelize");

class Province extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.SMALLINT.UNSIGNED, allowNull: false, primaryKey: true},
        code:                {type: Sequelize.DataTypes.STRING(2),         allowNull: false},
        name:                {type: Sequelize.STRING(80),                  allowNull: false},
        countryId:           {type: Sequelize.DataTypes.STRING(2),         allowNull: false,
          references: {
            model: 'Country',
            key: 'id'
          }
        }
      },
      { 
        sequelize, 
        timestamps: true, 
        paranoid: true,
        tableName: 'TB_PROVINCE' 
      }
    );
  }
}
module.exports = Province;
