const Ticket = require("../../model/entity/Ticket");

class TicketController {
  async list(req, res) {
    const tickets = await Ticket.findAll();

    if (tickets.length === 0) {
      return res.status(404).json({ message: "Nenhum ticket encontrado" });
    }

    return res.status(200).json(tickets);
  }

  async store(req, res) {
    const { patient_id } = req.params;
    const { title, description } = req.body;

    const status = "1";

    const ticket = await Ticket.create({
      title,
      description,
      status,
      patient_id
    });

    return res.status(200).json(ticket);
  }

  async getById(req, res) {
    const { patient_id } = req.params;
    const tickets = await Ticket.findAll({ where: { patient_id } });

    return res.json(tickets);
  }
}

module.exports = new TicketController();
