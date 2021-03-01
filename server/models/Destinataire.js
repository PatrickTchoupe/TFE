const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Adresse = require("./adresse");

const Destinataire = dbConnection.define('destinataire', {
    idDestinataire: {
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
    prenom: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {len: [2, 32]}
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {len: [2, 32]}
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
  });

module.exports = Destinataire;
