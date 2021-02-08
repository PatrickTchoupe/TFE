const Transactions = require("../models/Transactions");
const cron = require('node-cron');
const shell = require('shelljs');

const transactions = async (req, res) => {
    const users = await Transactions.findAll(
        {attributes: ['idTransactions', 'idEnvoi', 'Prix']});

    if (users.length === 0)
        return res
            .status(404)
            .json({message: "No Users found in the database"});
    res
        .status(200)
        .json({transactions: users});
};

const createTransactions = async (req, res) => {

    const reqBody = {...req.body};

    await Transactions.create(reqBody);

    return res
        .status(200)
        .json({transactions: reqBody});
};

module.exports = {
    transactions, createTransactions
};
