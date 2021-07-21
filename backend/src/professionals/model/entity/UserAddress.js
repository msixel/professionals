const Sequelize = require("sequelize");

class UserAddress extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        userId:              {type: Sequelize.DataTypes.UUID,              allowNull: false, primaryKey: true,
          references: {
            model: 'User',
            key: 'id'
          }
        },
        addressId:           {type: Sequelize.DataTypes.TINYINT.UNSIGNED,  allowNull: false, primaryKey: true},
        street:              {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        number:              {type: Sequelize.DataTypes.SMALLINT.UNSIGNED, allowNull: true},
        complement:          {type: Sequelize.DataTypes.STRING(80),        allowNull: true},
        postalCode:          {type: Sequelize.DataTypes.STRING(12),        allowNull: false},
        countryId:           {type: Sequelize.DataTypes.STRING(2),         allowNull: false,
          references: {
            model: 'Country',
            key: 'id'
          }
        },
        provinceId:          {type: Sequelize.DataTypes.SMALLINT.UNSIGNED, allowNull: true,
          references: {
            model: 'Province',
            key: 'id'
          }
        },
        provinceOther:       {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        city:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        default:             {type: Sequelize.DataTypes.BOOLEAN,           allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_USER_ADDRESS' 
      }
    );
  }
}
module.exports = UserAddress;
