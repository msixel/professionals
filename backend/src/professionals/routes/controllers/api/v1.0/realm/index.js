const { Router } = require("express");
const routes = new Router();

const AuthTypeController = require("./AuthTypeController");
const CredentialController = require("./CredentialController");
const RoleController = require("./RoleController");
const UserController = require("./UserController");

routes.get("/authTypes", AuthTypeController.findAll);
routes.get("/roles", RoleController.findAll);
routes.get("/users", UserController.findAll); 
routes.get("/user/:user_id", UserController.findById);
routes.get("/user/:user_id/credentials", CredentialController.findByUser);
routes.get("/user/:user_id/credential/:credential_id", CredentialController.findByCompositeId);
routes.get("/user/:user_id/roles", RoleController.findByUser);

module.exports = routes;
