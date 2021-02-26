const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const helmet = require("helmet");
const bodyParser = require('body-parser')
const dbConnection= require('./config/database');

require('dotenv').config();

/* ***** import routes ***** */
const clients = require('./routes/clientRoute');
const chargement = require('./routes/chargementRoute');
const envoi = require('./routes/envoiRoute');

/* ******** middleware ******** */
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* define routes imported */

app.use('/api/v1', clients);
app.use('/api/v1', chargement);
app.use('/api/v1',envoi);

/** database connection */
dbConnection.authenticate()
    .then(() => {
        if (process.env.NODE_ENV === 'dev') {
            console.log(`Database connected successfully`)
        }
    })
    .catch(error => console.error("Unable to connect to database", error));

app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
});