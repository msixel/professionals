const Professional = require("../../model/entity/Professional");

class RegisterController {
  async store(req, res) {
    const { email, password } = req.body;

    const defaultNationality = "BR";
    const defaultProvince = 1;

    const pro = await Professional.create(req.body);

    return res.json({ pro });
  }
}
module.exports = new RegisterController();
