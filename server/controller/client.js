const Client = require("../models/clients");
const cron = require('node-cron');
const shell = require('shelljs');

const clients = async (req, res) => {
    const users = await Client.findAll(
        {attributes: ['idClient', 'Nom', 'Prenom', 'email']});

    if (users.length === 0)
        return res
            .status(404)
            .json({message: "No Users found in the database"});
    res
        .status(200)
        .json({clients: users});
};

const createClient = async (req, res) => {

    const reqBody = {...req.body};

    await Client.create(reqBody);

    return res
        .status(200)
        .json({client: reqBody});
};

module.exports = {
    clients, createClient
};
