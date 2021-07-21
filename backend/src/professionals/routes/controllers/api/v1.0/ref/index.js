const { Router } = require("express");
const routes = new Router();

const AreaController = require("./AreaController");
const ContactTypeController = require("./ContactTypeController");
const CountryController = require("./CountryController");
const ProvinceController = require("./ProvinceController");
const ReferenceTypeController = require("./ReferenceTypeController");
const SpecialityController = require("./SpecialityController");

routes.get("/areas", AreaController.findAll);
routes.get("/area/:area_id", AreaController.findById);
routes.get("/area/:area_id/specialities", SpecialityController.findByArea);
routes.get("/area/:area_id/speciality/:id", SpecialityController.findByAreaAndId);
routes.get("/countries", CountryController.findAll);
routes.get("/country/:country_id", CountryController.findById);
routes.get("/country/:country_id/provinces", ProvinceController.findByCountry);
routes.get("/country/:country_id/province/:id", ProvinceController.findByCountryAndId);
routes.get("/contactTypes", ContactTypeController.findAll);
routes.get("/contactType/:id", ContactTypeController.findById);
routes.get("/referenceTypes", ReferenceTypeController.findAll);
routes.get("/referenceType/:id", ReferenceTypeController.findById);

module.exports = routes;
