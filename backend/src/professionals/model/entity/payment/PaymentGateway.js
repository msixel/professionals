const Sequelize = require("sequelize");

class PaymentGateway extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id:                  {type: Sequelize.DataTypes.STRING(2),         allowNull: false, primaryKey: true},
        name:                {type: Sequelize.DataTypes.STRING(80),        allowNull: false},
        description:         {type: Sequelize.DataTypes.STRING(4096),      allowNull: true}
      },
      { 
        sequelize, 
        timestamps: true, 
        paranoid: true,
        tableName: 'TB_PAYMENT_GATEWAY' 
      }
    );
  }
}
module.exports = PaymentGateway;
