const UserAddress = require("../../../../model/entity/UserAddress");

class UserAddressController {
  async findByUser(req, res) {
    const { user_id } = req.params;
    const entities = await UserAddress.findAll({ where: { user_id } });

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }

  async findByUserAndAddressId(req, res) {
    const { user_id, address_id } = req.params;
    const entities = await UserAddress.findAll({ where: { user_id, address_id } });

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new UserAddressController();
