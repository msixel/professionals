const ContactType = require("../../../../../model/entity/ref/ContactType");

class ContactTypeController {
  async findAll(req, res) {
    const entities = await ContactType.findAll();
    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entities).status(200);
  }

  async findById(req, res) {
    const { id } = req.params;
    const entity = await ContactType.findByPk(id);
    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entity).status(200);
  }
}

module.exports = new ContactTypeController();
