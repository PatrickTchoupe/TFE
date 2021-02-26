const express  = require("express");

const router = express.Router();

const ctrlClients = require("../controller/ClientController");

router.post("/register", ctrlClients.createClient);
router.get("/getClients", ctrlClients.getAllClients);
router.post('/login',ctrlClients.login);
router.get('/userProfile', ctrlClients.getUserProfile);
router.put('/update', ctrlClients.updateProfile)

module.exports = router;
