const { Router } = require("express");
const routes = new Router();

routes.use("/v1.0", require("./v1.0"));

module.exports = routes;
