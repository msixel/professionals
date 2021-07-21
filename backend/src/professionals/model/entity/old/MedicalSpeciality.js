const Sequelize = require("sequelize");

class MedicalSpeciality extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(80),
        description: Sequelize.TEXT,
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
module.exports = MedicalSpeciality;
