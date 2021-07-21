const { Router } = require("express");
const routes = new Router();

const ProfessionalController = require("./ProfessionalController.js");
const RegisterController = require("./RegisterController");
const PatientController = require("./PatientController");
const ApprovedProsController = require("./ApprovedProsController");
const RepprovedProsController = require("./RepprovedProsController");
const TicketController = require("./TicketController");
const OpenTicketController = require("./OpenTicketController");
const ClosedTicketController = require("./ClosedTicketController");

//Rotas do profissional
routes.get("/professionals", ProfessionalController.list);
routes.put("/professionals/update", ProfessionalController.update);
routes.post("/professionals/create", ProfessionalController.store);
routes.get("/professionals/:id", ProfessionalController.getById);

//Rotas dos profissionais aprovados
routes.get("/approved-pros", ApprovedProsController.list);
routes.put("/approve/:id", ApprovedProsController.aprove);

//Rotas dos profissionais reprovados
routes.get("/repproved-pros", RepprovedProsController.list);
routes.put("/repprove/:id", RepprovedProsController.reprove);

//Rotas de registro
routes.post("/register/user", ProfessionalController.store);

//Rotas de usuarios
routes.get("/patients", PatientController.list);
routes.post("/patients/create", PatientController.store);
routes.put("/patients/update", PatientController.update);
routes.delete("/patients/:email", PatientController.delete);
routes.get("/patients/:id", PatientController.findById);

//Rotas de tickets
routes.get("/tickets", TicketController.list);
routes.post("/tickets/:patient_id", TicketController.store);
routes.get("/tickets/:patient_id", TicketController.getById);

//Rotas de tickets aprovados
routes.get("/open/tickets", OpenTicketController.list);
routes.put("/close/ticket/:id", OpenTicketController.close);

//Rotas de tickets fechados
routes.get("/closed/tickets", ClosedTicketController.list);
routes.put("/open/ticket/:id", ClosedTicketController.open);

module.exports = routes;
