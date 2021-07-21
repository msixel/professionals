const Ticket = require("../../model/entity/Ticket");

class OpenTicketController {
  async list(req, res) {
    const tickets = await Ticket.findAll({ where: { status: "1" } });
    return res.json(tickets);
  }

  async close(req, res) {
    const { id } = req.params;
    const ticket = await Ticket.findOne({ where: { id, status: "1" } });

    if (!ticket) {
      return res.status(404).json({ message: "O ticket ja esta fechado" });
    }

    const repproved = await ticket.update({ status: "0" });

    return res.json(repproved);
  }
}

module.exports = new OpenTicketController();
