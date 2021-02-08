const Envoi = require("../models/Envoi");
const cron = require('node-cron');
const shell = require('shelljs');

const envoi = async (req, res) => {
    const users = await Envoi.findAll(
        {attributes: ['idEnvoi', 'Descriptif', 'Destinataire', 'Etat', 'Remarque']});

    if (users.length === 0)
        return res
            .status(404)
            .json({message: "No Users found in the database"});
    res
        .status(200)
        .json({envoi: users});
};

const createEnvoi = async (req, res) => {

    const reqBody = {...req.body};

    await Envoi.create(reqBody);

    return res
        .status(200)
        .json({envoi: reqBody});
};

module.exports = {
    envoi, createEnvoi
};
