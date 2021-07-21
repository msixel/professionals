const Sequelize = require("sequelize");

class Prescription extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.TEXT,
        professional_id: Sequelize.SMALLINT,
        patient_id: Sequelize.SMALLINT,
        medical_appointment_id: Sequelize.INTEGER,
        create_time: Sequelize.DATE,
        update_time: Sequelize.DATE
      },
      { sequelize, timestamps: false }
    );
    this.addHook("beforeSave", async entity => {
      if (!entity.create_time) entity.create_time = now();
      entity.update_time = now();
    });
  }
}
module.exports = Prescription;
