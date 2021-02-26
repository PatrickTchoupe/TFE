const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Client = require('./Client');

const Envoi = dbConnection.define('envoi', {
    idEnvoi: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    idClient: {
        type: Sequelize.UUID,
        references: { model: Client, key: 'idClient' }
    },
    Descriptif: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Destination: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        isEmail: true
    },
    Destinataire: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    etat: {
        type: Sequelize.STRING,
        allowNull: true,
        notEmpty: true
    },
    Remarque: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    freezeTableName: true
  });

module.exports = Envoi;
