const { Router } = require("express");
const routes = new Router();

const PaymentGatewayController = require("./PaymentGatewayController");
const PaymentMethodController = require("./PaymentMethodController");

routes.get("/gateways", PaymentGatewayController.findAll);
routes.get("/methods", PaymentMethodController.findAll);

module.exports = routes;
