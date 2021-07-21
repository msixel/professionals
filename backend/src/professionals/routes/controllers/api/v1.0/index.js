const { Router } = require("express");
const routes = new Router();

routes.use("/payment", require("./payment"));
routes.use("/realm", require("./realm"));
routes.use("/ref", require("./ref"));

const UserAddressController = require("./UserAddressController");
const UserContactController = require("./UserContactController");

routes.get("/customer/:user_id/contacts", UserContactController.findByUser);
routes.get("/customer/:user_id/contact/:contact_id", UserContactController.findByUserAndContactId);
routes.get("/customer/:user_id/addresses", UserAddressController.findByUser);
routes.get("/customer/:user_id/address/:address_id", UserAddressController.findByUserAndAddressId);
routes.get("/professional/:user_id/contacts", UserContactController.findByUser);
routes.get("/professional/:user_id/contact/:contact_id", UserContactController.findByUserAndContactId);
routes.get("/professional/:user_id/addresses", UserAddressController.findByUser);
routes.get("/professional/:user_id/address/:address_id", UserAddressController.findByUserAndAddressId);

module.exports = routes;
