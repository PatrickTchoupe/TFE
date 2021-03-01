const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Adresse = dbConnection.define('adresse', {
    idAdresse: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    rue: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ville: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
  });

module.exports = Adresse;
