const Country = require("../../../../../model/entity/ref/Country");

class CountryController {
  async findAll(req, res) {
    const entities = await Country.findAll();

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }

  async findById(req, res) {
    const { country_id } = req.params;
    const entity = await Country.findByPk(country_id);

    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entity).status(200);
  }
}

module.exports = new CountryController();
