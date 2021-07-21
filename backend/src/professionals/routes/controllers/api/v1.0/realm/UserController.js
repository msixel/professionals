const User = require("../../../../../model/entity/realm/User");

class UserController {
  async findById(req, res) {
    const { user_id } = req.params;
    const entity = await User.findByPk(user_id);

    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entity).status(200);
  }

  async findAll(req, res) {
    const entities = await User.findAll();

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new UserController();
