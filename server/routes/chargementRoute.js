const express  = require("express");

const router = express.Router();

const ctrlChargement = require("../controller/chargementController");

router.post("/addShip", ctrlChargement.addChargement);
router.get("/getAllShip", ctrlChargement.getAllShip);

module.exports = router;
