const Professional = require("../../model/entity/Professional");

class ProfessionalController {
  async list(req, res) {
    const pro = await Professional.findAll();

    if (!pro) {
      return (res.json({
        message: "Profissional não encontrado"
      }).status = 404);
    }

    return res.json(pro).status(200);
  }
  async store(req, res) {
    const proExists = await Professional.findOne({
      where: { email: req.body.email }
    });
    const cpfExists = await Professional.findOne({
      where: { tax_id: req.body.tax_id }
    });

    if (proExists) {
      return res.json({ error: "O email já está sendo usado" }).status(400);
    }
    if (cpfExists) {
      return res.json({ error: "Esse CPF já foi cadastrado" }).status(400);
    }

    const pro = await Professional.create(req.body);

    return res.json(pro).status(200);
  }
  async update(req, res) {
    const { email } = req.body;
    const professional = await Professional.findOne({ where: { email } });

    if (!professional) {
      return res.json({ error: "Usuário não encontrado" }).status(404);
    }

    const { id } = await professional.update(req.body);

    return res.json({ message: `Usuário ${email} atualizado` });
  }

  async getById(req, res) {
    const { id } = req.params;

    const pro = await Professional.findOne({ where: { id } });

    if (!pro) {
      return res
        .status(404)
        .json({ message: "Não foi encontrado nenhum usuário com este id" });
    }

    return res.status(200).json(pro);
  }
}

module.exports = new ProfessionalController();
