const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Adresse = require("./adresse");

const Ramassage = dbConnection.define('ramassage', {
    idRamassage: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    adresse: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: Adresse, key: 'idAdresse' }
    },
    heureMin: {
        type: Sequelize.TIME,
        allowNull: false
    },
    heureMax: {
        type: Sequelize.TIME,
        allowNull: false
    },
    dateRamassage: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
}, {
    freezeTableName: true
  });

module.exports = Ramassage;
