const PaymentMethod = require("../../../../../model/entity/payment/PaymentMethod");

class PaymentMethodController { 
  async findAll(req, res) {
    const entities = await PaymentMethod.findAll();

    if (!entities) {
      return (entities.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new PaymentMethodController();
