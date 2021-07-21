const Credential = require("../../../../../model/entity/realm/Credential");
const User = require("../../../../../model/entity/realm/User");

class CredentialController {

  async findByCompositeId(req, res) {
    const { user_id, credential_id } = req.params;
    const entity = await Credential.findOne({ where: { user_id, credential_id } } );

    if (!entity) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entity).status(200);
  }

  async findByUser(req, res) {
    const { user_id } = req.params;
    const entityParent = await User.findByPk(user_id, { include: Credential });
    if (!entityParent) {
      return (res.json({
        message: "Parent not found"
      }).status = 404);
    }

    const entities = await entityParent.Credentials;
    if (!entities || !entities.length) {
      return (res.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new CredentialController();
