const Area = require("../../../../../model/entity/ref/Area");
const Speciality = require("../../../../../model/entity/ref/Speciality");

class SpecialityController {

  async findByArea(req, res) {
    const { area_id } = req.params;
    const entityParent = await Area.findByPk(area_id, { include: Speciality } );
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }
    if (!entityParent.Specialities || entityParent.Specialities.length == 0) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(entityParent.Specialities);
  }

  async findByAreaAndId(req, res) {
    const { area_id, id } = req.params;
    const entityParent = await Area.findByPk(area_id, { include: Speciality } );
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }
    var filteredEntities = entityParent.Specialities.filter (speciality => speciality.id == parseInt(id,10) )
    if (filteredEntities.length == 0) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    return res.json(filteredEntities[0]);
  }
}

module.exports = new SpecialityController();
