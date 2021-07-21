const Sequelize = require("sequelize");

class Ticket extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING(80),
        description: Sequelize.TEXT,
        patient_id: Sequelize.SMALLINT,
        status: Sequelize.STRING(1),
        create_time: Sequelize.DATE,
        update_time: Sequelize.DATE
      },
      { sequelize, timestamps: false }
    );
  }
}
module.exports = Ticket;
