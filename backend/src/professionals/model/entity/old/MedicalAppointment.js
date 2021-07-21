const Sequelize = require("sequelize");

class MedicalAppointment extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        professional_id: Sequelize.SMALLINT,
        patient_id: Sequelize.SMALLINT,
        medical_speciality_id: Sequelize.INTEGER,
        begin_time: Sequelize.DATE,
        end_time: Sequelize.DATE,
        gross_amount: Sequelize.DECIMAL(14,2),
        payment_time: Sequelize.DATE,
        notes: Sequelize.TEXT,
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
module.exports = MedicalAppointment;
