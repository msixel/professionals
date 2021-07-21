const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const PaymentGateway = require("./entity/payment/PaymentGateway");
const PaymentMethod = require("./entity/payment/PaymentMethod");

const AuthType = require("./entity/realm/AuthType");
const Credential = require("./entity/realm/Credential");
const Role = require("./entity/realm/Role");
const User = require("./entity/realm/User");
const UserRole = require("./entity/realm/UserRole");

const Area = require("./entity/ref/Area")
const ContactType = require("./entity/ref/ContactType");
const Country = require("./entity/ref/Country");
const Province = require("./entity/ref/Province");
const ReferenceType = require("./entity/ref/ReferenceType")
const Speciality = require("./entity/ref/Speciality");

const UserAddress = require("./entity/UserAddress");
const UserContact = require("./entity/UserContact");



const entities = [
  PaymentGateway,
  PaymentMethod,

  AuthType,
  Credential,
  Role,
  User,
  UserRole,

  Area,
  ContactType,
  Country,
  Province,
  ReferenceType,
  Speciality,

  UserAddress,
  UserContact
];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    entities.map(entity => entity.init(this.connection));

    require("./entity/realm/associations");
    require("./entity/ref/associations");
    require("./entity/associations");
  }
}

module.exports = new Database();
