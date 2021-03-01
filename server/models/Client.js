const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Adresse = require("./adresse");

const Client = dbConnection.define('client', {
    idClient: {
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
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        isEmail: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true
  });

module.exports = Client;
