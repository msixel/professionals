const Province = require("../../../../../model/entity/ref/Province");
const Country = require("../../../../../model/entity/ref/Country");

class ProvinceController {

  async findByCountry(req, res) {
    const { country_id } = req.params;
    const entityParent = await Country.findByPk(country_id, { include: Province } );
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }
    if (!entityParent.Provinces || entityParent.Provinces.length == 0) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entityParent.Provinces);
  }

  async findByCountryAndId(req, res) {
    const { country_id, id } = req.params;
    const entityParent = await Country.findByPk(country_id, { include: Province } );
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }
    var filteredEntities = entityParent.Provinces.filter (province => province.id == parseInt(id,10) )
    if (filteredEntities.length == 0) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(filteredEntities[0]);
  }
}

module.exports = new ProvinceController();
