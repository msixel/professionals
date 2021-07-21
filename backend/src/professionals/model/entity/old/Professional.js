const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

class Professional extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        nationality: Sequelize.SMALLINT,
        birth_date: Sequelize.DATE,
        birth_place: Sequelize.STRING,
        email: Sequelize.STRING,
        photo_file: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        tax_id: Sequelize.STRING,
        tax_id_issue_date: Sequelize.DATE,
        crm: Sequelize.STRING(9),
        crm_issue_province: Sequelize.STRING(2),
        crm_issue_date: Sequelize.STRING,
        analysis_time: Sequelize.DATE,
        analysis_resume: Sequelize.TEXT,
        approvated: Sequelize.TINYINT
      },
      { sequelize, timestamps: false }
    );
    this.addHook("beforeSave", async professional => {
      if (professional.password) {
        professional.password_hash = await bcrypt.hash(
          professional.password,
          8
        );
      }
    });
  }
}
module.exports = Professional;
