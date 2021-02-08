const Chargement = require("../models/Chargement");
const cron = require('node-cron');
const shell = require('shelljs');

const chargements = async (req, res) => {
    const users = await Chargement.findAll(
        {attributes: ['idChargement', 'Date']});

    if (users.length === 0)
        return res
            .status(404)
            .json({message: "No Users found in the database"});
    res
        .status(200)
        .json({chargements: users});
};

const createChargement = async (req, res) => {

    const reqBody = {...req.body};

    await Chargement.create(reqBody);

    return res
        .status(200)
        .json({chargements: reqBody});
};

module.exports = {
    chargements, createChargement
};
