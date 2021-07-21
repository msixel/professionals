const Ticket = require("../../model/entity/Ticket");

class ClosedTicketController {
  async list(req, res) {
    const tickets = await Ticket.findAll({ where: { status: "0" } });
    return res.json(tickets);
  }

  async open(req, res) {
    const { id } = req.params;
    const ticket = await Ticket.findOne({ where: { id, status: "0" } });

    if (!ticket) {
      return res.json({ message: "O ticket ja esta aberto" });
    }

    const open = await ticket.update({ status: "1" });

    return res.json(open);
  }
}

module.exports = new ClosedTicketController();
