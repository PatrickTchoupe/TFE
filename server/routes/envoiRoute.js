const express  = require("express");

const router = express.Router();

const ctrlShipment = require("../controller/envoiController");

router.post("/addShipment",ctrlShipment.createShipment );


module.exports = router;