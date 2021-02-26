const Sequelize = require("sequelize");
const dbConnection = require("../config/database");
const envoi = require("./Envoi");

const Transactions = dbConnection.define('transactions', {
    idTransactions: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        isUUID: 4
    },
    prix: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true
  });

module.exports = Transactions;
