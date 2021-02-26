const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Chargement = dbConnection.define('chargements', {
    idChargements: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
}, {
    freezeTableName: true
  });

module.exports = Chargement;
