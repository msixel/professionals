const Professional = require("../../model/entity/Professional"); 

class ApprovedPros {
  async list(req, res) {
    const approvedpros = await Professional.findAll({
      where: { approvated: 1 }
    });

    if (!approvedpros) {
      return res
        .status(404)
        .json({ error: "Não foi encontrado nenhum profissional aprovado" });
    }
    return res.json(approvedpros);
  }

  async aprove(req, res) {
    const { id } = req.params;
    const unnaproved = await Professional.findOne({
      where: { id, approvated: 0 }
    });

    if (!unnaproved) {
      return res
        .status(400)
        .json({ message: "Este profissional foi aprovado" });
    }

    const approved = await unnaproved.update({ approvated: 1 });

    return res.status(201).json(approved);
  }
}

module.exports = new ApprovedPros();
