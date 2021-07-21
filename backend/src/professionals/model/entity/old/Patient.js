const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

class Patient extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(80),
        gender: Sequelize.STRING(1),
        nationality: Sequelize.SMALLINT,
        birth_date: Sequelize.DATE,
        birth_place: Sequelize.STRING(80),
        email: Sequelize.STRING(255),
        photo_file: Sequelize.STRING(255),
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING(64),
        tax_id: Sequelize.STRING(11),
        tax_id_issue_date: Sequelize.DATE,
        create_time: Sequelize.DATE,
        update_time: Sequelize.DATE
      },
      { sequelize, timestamps: false }
    );
    this.addHook("beforeSave", async entity => {
      if (entity.password) {
        entity.password_hash = await bcrypt.hash(entity.password, 8);
      }
    });
  }
}
module.exports = Patient;
