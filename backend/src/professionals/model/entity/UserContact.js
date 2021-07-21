const Sequelize = require("sequelize");

class UserContact extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        userId:              {type: Sequelize.DataTypes.UUID,              allowNull: false, primaryKey: true,
          references: {
            model: 'User',
            key: 'id'
          }
        },
        contactId:           {type: Sequelize.DataTypes.TINYINT.UNSIGNED,  allowNull: false, primaryKey: true},
        contactTypeId:       {type: Sequelize.DataTypes.STRING(8),         allowNull: false,
          references: {
            model: 'ContactType',
            key: 'id'
          }
        },
        contactText:         {type: Sequelize.DataTypes.STRING(80),        allowNull: true},
        default:             {type: Sequelize.DataTypes.BOOLEAN,           allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_USER_CONTACT' 
      }
    );
  }
}
module.exports = UserContact;
