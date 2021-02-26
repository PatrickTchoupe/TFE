const Envoi =require('../models/Envoi');
const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils');
const asyncLib = require('async');


const createShipment = (req,res) => {

        const description = req.body.description
        const client = req.body.client;
        const destination = req.body.destination;
        const receiver = req.body.destinataire;
        const remarque = req.body.remarque;


        Envoi.create({
            Descriptif: description,
            idClient: client,
            Destination: destination,
            Destinataire: receiver,
            Remarque: remarque
        })
        .then (newShipment => {
            return res
                .status(200)
                .json({
                    'message': 'shipment added'
                })
        })
        .catch(err => {
            return res
                .status(500)
                .json({
                    'error': err
                })
        })

}

module.exports = {createShipment}