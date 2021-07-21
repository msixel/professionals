const PaymentGateway = require("../../../../../model/entity/payment/PaymentGateway");

class PaymentGatewayController { 
  async findAll(req, res) {
    const entities = await PaymentGateway.findAll();

    if (!entities) {
      return (entities.json({
        message: "Data not found"
      }).status = 404);
    }
    
    return res.json(entities).status(200);
  }
}

module.exports = new PaymentGatewayController();
