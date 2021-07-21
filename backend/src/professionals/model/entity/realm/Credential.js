const Sequelize = require("sequelize");

class Credential extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        userId:              {type: Sequelize.DataTypes.UUID,              allowNull: false, primaryKey: true},
        credentialId:        {type: Sequelize.DataTypes.TINYINT.UNSIGNED,  allowNull: false, primaryKey: true},
        authTypeId:          {type: Sequelize.DataTypes.STRING(4),         allowNull: false},
        login:               {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        password:            {type: Sequelize.DataTypes.STRING(32),        allowNull: true},
        validatedAt:         {type: Sequelize.DataTypes.DATE,              allowNull: true}
      },
      { 
        sequelize, 
        timestamps: true,
        paranoid: true, 
        tableName: 'TB_CREDENTIAL' 
      }
    );
  }
}
module.exports = Credential;