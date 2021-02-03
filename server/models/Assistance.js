const Sequelize = require("sequelize");
const dbConnection = require("../config/database");

const Assistance = dbConnection.define('assistance', {
    Questions: {
        type: Sequelize.STRING,
    },
    Answers: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Assistance;
