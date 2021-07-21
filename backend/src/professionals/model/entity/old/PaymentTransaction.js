const Sequelize = require("sequelize");

class PaymentTransaction extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        gross_amount: Sequelize.DECIMAL(14,2),
        payment_method_id: Sequelize.SMALLINT,
        medical_appointment_id: Sequelize.INTEGER,       
        status: Sequelize.STRING(1),
        createdAt: {type: Sequelize.DataTypes.DATE, allowNull: false, defaultValue: Sequelize.NOW},
        removedAt: {type: Sequelize.DataTypes.DATE, allowNull: true}
      },
      { 
        sequelize, 
        timestamps: false, 
        tableName: 'TB_PAYMENT_TRANSACTION' 
      }
    );
  }
}
module.exports = PaymentTransaction;
