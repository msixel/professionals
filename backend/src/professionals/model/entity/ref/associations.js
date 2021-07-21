const Sequelize = require("sequelize");
const Country = require("./Country");
const Province = require("./Province");
const Area = require("./Area");
const Speciality = require("./Speciality");

Country.hasMany(Province, {
    foreignKey: 'countryId'
  });
Province.belongsTo(Country);

Area.hasMany(Speciality, {
  foreignKey: 'areaId'
});
Speciality.belongsTo(Area);
