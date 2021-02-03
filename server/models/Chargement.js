const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Chargement = dbConnection.define('chargement', {
    idChargement: {
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
});

module.exports = Chargement;
