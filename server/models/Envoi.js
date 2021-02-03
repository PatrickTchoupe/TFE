const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Envoi = dbConnection.define('envoi', {
    idEnvoi: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    destination: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        isEmail: true
    },
    destinataire: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    etat: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    remarque: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = Envoi;
