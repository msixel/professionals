const { Router } = require("express");
const routes = new Router();

routes.use("/api", require("./api"));

module.exports = routes;
