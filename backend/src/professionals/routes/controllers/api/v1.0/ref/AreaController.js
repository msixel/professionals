const Area = require("../../../../../model/entity/ref/Area");

class AreaController {
  async findAll(req, res) {
    const entities = await Area.findAll();

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }

  async findById(req, res) {
    const { area_id } = req.params;
    const entity = await Area.findByPk(area_id);

    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entity).status(200);
  }
}

module.exports = new AreaController();
