const UserContact = require("../../../../model/entity/UserContact");

class UserContactController {
  async findByUser(req, res) {
    const { user_id } = req.params;
    const entities = await UserContact.findAll({ where: { user_id } });

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }

  async findByUserAndContactId(req, res) {
    const { user_id, contact_id } = req.params;
    const entities = await UserContact.findAll({ where: { user_id, contact_id } });

    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new UserContactController();
