const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const Colis = require("./Colis");
const Ramassage = require("./Ramassage");

const Envoi = dbConnection.define('envoi', {
    idEnvoi: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    colis:{
        type: Sequelize.UUID,
        references: { model: Colis, key: 'idColis' }
    },
   enlevement: {
        type: Sequelize.UUID,
        references: { model: Ramassage, key: 'idRamassage' }
    },
    statut: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true
  });

module.exports = Envoi;
