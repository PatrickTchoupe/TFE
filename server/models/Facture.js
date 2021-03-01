const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Envoi = require("./Envoi");

const Facture = dbConnection.define('facture', {
    idFacture: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    expedition: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: Envoi, key: 'idEnvoi' }
    },
    prixHT: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
}, {
    freezeTableName: true
  });

module.exports = Facture;
