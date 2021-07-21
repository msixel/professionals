const Professional = require("../../model/entity/Professional");

class ReprovedProsController {
  async list(req, res) {
    const reprovedpros = await Professional.findAll({
      where: { approvated: 0 }
    });

    if (!reprovedpros) {
      return res
        .status(404)
        .json({ message: "Não foi encontrado nenhum profissional pendente" });
    }
    return res.json(reprovedpros);
  }

  async reprove(req, res) {
    const { id } = req.params;
    const approved = await Professional.findOne({
      where: { id, approvated: 1 }
    });

    if (!approved) {
      return res
        .status(404)
        .json({ message: "Este profissional ainda não foi aprovado" });
    }

    const unnaproved = await approved.update({ approvated: 0 });

    return res.status(201).json(unnaproved);
  }
}

module.exports = new ReprovedProsController();
