const Patient = require("../../model/entity/Patient");

class PatientController {
  async list(req, res) {
    const patients = await Patient.findAll();
    return res.json(patients).status(200);
  }

  async store(req, res) {
    const { tax_id, email } = req.body;

    const cpfExists = await Patient.findOne({ where: { tax_id } });
    const emailExists = await Patient.findOne({ where: { email } });

    if (cpfExists) {
      return res.json({ error: "Este CPF já foi cadastrado" }).status(400);
    }
    if (emailExists) {
      return res.json({ error: "Este email ja esta sendo usado" });
    }

    const patient = await Patient.create(req.body);

    return res.json(patient);
  }

  async update(req, res) {
    const { email, tax_id } = req.body;

    const patient = await Patient.findOne({ where: { email } });
    console.log(patient);
    const { id } = await patient.update(req.body);

    return res.json({ message: `Paciente ${email} atualizado` });
  }

  async delete(req, res) {
    const { email } = req.params;

    const patient = await Patient.destroy({ where: { email } });

    if (!patient) {
      return res
        .json({ error: "Usuário não encontrado" })
        .status(404)
        .status(400);
    }

    return res.json({ messag: "Usuario deletado com sucesso" }).status(200);
  }

  async findById(req, res) {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);

    if (!patient) {
      return res.status(404).json({ message: "O paciente não foi encontrado" });
    }

    return res.json(patient);
  }
}
module.exports = new PatientController();
