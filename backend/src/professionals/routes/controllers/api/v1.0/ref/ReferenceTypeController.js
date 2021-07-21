const ReferenceType = require("../../../../../model/entity/ref/ReferenceType");

class ReferenceTypeController {
  async findAll(req, res) {
    const entities = await ReferenceType.findAll();
    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entities).status(200);
  }

  async findById(req, res) {
    const { id } = req.params;
    const entity = await ReferenceType.findByPk(id);
    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entity).status(200);
  }
}

module.exports = new ReferenceTypeController();
