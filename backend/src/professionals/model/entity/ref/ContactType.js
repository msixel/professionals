const Sequelize = require("sequelize");

class ContactType extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(8),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true, 
        paranoid: true,
        tableName: 'TB_CONTACT_TYPE' 
      }
    );
  }
}
module.exports = ContactType;
