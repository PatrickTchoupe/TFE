const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Client = require('./Client');
const Destinataire = require("./Destinataire");

const Colis = dbConnection.define('colis',{
    idColis: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    expediteur: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: Client, key: 'idClient' }
    },
    destinataire: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: Destinataire, key: 'idDestinataire' }
    },
    qte: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    poids: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    longueur: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    largeur: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hauteur: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

module.exports = Colis ; 