const AuthType = require("../../../../../model/entity/realm/AuthType");

class AuthTypeController {
  async findAll(req, res) {
    const entities = await AuthType.findAll();

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new AuthTypeController();
