const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.UUID,              allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        gender:              {type: Sequelize.DataTypes.STRING(1),         allowNull: false},
        birth:               {type: Sequelize.DataTypes.DATE,              allowNull: false},
        photoFilename:       {type: Sequelize.DataTypes.STRING(80),        allowNull: true},
        naturality:          {type: Sequelize.DataTypes.STRING(80),        allowNull: true},
        nationalityId:       {type: Sequelize.DataTypes.STRING(2),         allowNull: false},
        taxId:               {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        taxIdIssuedAt:       {type: Sequelize.DataTypes.DATE,              allowNull: false}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_USER' 
      }
    );
  }
}
module.exports = User;