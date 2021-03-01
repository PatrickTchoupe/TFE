const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Chargement = dbConnection.define('chargement', {
    idChargements: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    dateDebut: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    dateFin: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
}, {
    freezeTableName: true
  });

module.exports = Chargement;
