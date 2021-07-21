const Role = require("../../../../../model/entity/realm/Role");
const User = require("../../../../../model/entity/realm/User");

class RoleController {
  async findAll(req, res) {
    const entities = await Role.findAll();

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }

  async findByUser(req, res) {
    const { user_id } = req.params;
    const entityParent = await User.findByPk(user_id, { include: Role } );
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }

    const entities = entityParent.Roles;
    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }

    return res.json(entities).status(200);
  }

}

module.exports = new RoleController();
